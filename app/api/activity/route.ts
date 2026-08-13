import { NextResponse } from "next/server";

const CHAIN_ID = "4663";
const CONTRACT = "0x5ae0cde11fb3f5072a0e8a2b802ecf9af0814dd8";
const ZERO = "0x0000000000000000000000000000000000000000";
const BASE = `https://api.blockscout.com/${CHAIN_ID}/api/v2`;

async function blockscout(path: string, apiKey?: string) {
  const url = new URL(`${BASE}${path}`);
  if (apiKey) url.searchParams.set("apikey", apiKey);
  const response = await fetch(url, {
    headers: { accept: "application/json" },
    next: { revalidate: 10 },
  });
  if (!response.ok) throw new Error(`Blockscout returned ${response.status}`);
  return response.json();
}

export async function GET() {
  const apiKey = process.env.BLOCKSCOUT_API_KEY;

  try {
    const [transfers, transactions, counters] = await Promise.all([
      blockscout(`/addresses/${CONTRACT}/token-transfers`, apiKey),
      blockscout(`/addresses/${CONTRACT}/transactions`, apiKey),
      blockscout(`/tokens/${CONTRACT}/counters`, apiKey),
    ]);

    const txMap = new Map<string, any>();
    for (const tx of transactions?.items ?? []) {
      if (tx.hash) txMap.set(tx.hash.toLowerCase(), tx);
    }

    const events = (transfers?.items ?? [])
      .filter((item: any) => {
        const token = String(item.token?.address_hash ?? item.token?.address ?? "").toLowerCase();
        return token === CONTRACT;
      })
      .slice(0, 50)
      .map((item: any) => {
        const from = String(item.from?.hash ?? item.from_address_hash ?? ZERO).toLowerCase();
        const to = String(item.to?.hash ?? item.to_address_hash ?? "").toLowerCase();
        const txHash = item.transaction_hash ?? item.tx_hash;
        const tx = txHash ? txMap.get(String(txHash).toLowerCase()) : undefined;
        const tokenId = item.total?.token_id ?? item.token_id ?? item.id ?? "";

        let event_type = "transfer";
        if (from === ZERO) event_type = "mint";

        return {
          event_type,
          event_timestamp: item.timestamp ?? item.block_timestamp ?? tx?.timestamp ?? null,
          transaction: txHash ?? null,
          token_id: String(tokenId),
          from,
          to,
          from_label: item.from?.name ?? null,
          to_label: item.to?.name ?? null,
          value: tx?.value ?? "0",
          block: item.block_number ?? tx?.block_number ?? null,
        };
      });

    return NextResponse.json(
      {
        configured: true,
        chain_id: CHAIN_ID,
        contract: CONTRACT,
        events,
        holders: Number(counters?.token_holders_count ?? 0),
        message: events.length ? "" : "No NFT activity found yet on Robinhood Chain.",
      },
      { headers: { "Cache-Control": "s-maxage=10, stale-while-revalidate=30" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load Blockscout activity.";
    return NextResponse.json(
      {
        configured: Boolean(apiKey),
        events: [],
        holders: 0,
        message: apiKey ? message : "Add the Blockscout API key in Vercel as BLOCKSCOUT_API_KEY.",
      },
      { status: 200 }
    );
  }
}
