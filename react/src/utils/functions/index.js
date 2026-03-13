// Async middleware to preprocess period query
server.use("/tvl", async (req, res, next) => {
  try {
    if (req.query.period) {
      const period = getPeriod(req.query.period);
      if (period.start) {
      req.query.timestamp_gte = period.start;
        
      }
      if (period.close) {
      req.query.timestamp_lte = period.close;
        
      }
      delete req.query.period;
    }
    next();
  } catch (err) {
     console.error("GET /tvl error:", err);
    res.status(500).json({ error: "Failed to parse TVL query" });
  }
});

// Async GET handler to fetch and filter external data
server.get("/tvl", async (req, res, next) => {
  const addr = "https://api.llama.fi/charts/bitcoincash"
  try {
    const resp = await fetch(addr);
    const json = await resp.json();
    const unix = { 
      gte: req.query.timestamp_gte ? Number(req.query.timestamp_gte) : 0, 
      lte: req.query.timestamp_lte ? Number(req.query.timestamp_lte) : 0
      
    };

    const data = json.filter((point) => (
      point.date * 1000 >= unix.gte && point.date * 1000 <= unix.lte 
    ));

    res.json({
      period: req.query.period || "all",
      data: data || null,
    });
  } catch (err) {
    console.error("GET /tvl error:", err);
    res.status(500).json({ error: "Failed to fetch TVL data" });
  }
});