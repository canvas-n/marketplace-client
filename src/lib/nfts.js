export function stripNFT(nft) {
  return {
    id: nft.id,
    title: nft.title,
  };
}

export function stripArt(art) {
  return {
    seq: art.seq,
    title: art.title,
  };
}
