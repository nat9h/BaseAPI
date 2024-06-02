const express = require("express");
const danz = require("d-scrape");
const router = express.Router();
const config = require("../schema/config");
const skrep = require("../scrapers/ai");
const { developer: dev } = config.options;

// Log Info
const messages = {
  error: {
    status: 404,
    developer: dev,
    result: "Error, Service Unavailable",
  },
  notRes: {
    status: 404,
    developer: dev,
    result: "Error, Invalid JSON Result",
  },
  query: {
    status: 400,
    developer: dev,
    result: "Please input parameter query!",
  },
  url: {
    status: 400,
    developer: dev,
    result: "Please input parameter URL!",
  },
  notUrl: {
    status: 404,
    developer: dev,
    result: "Error, Invalid URL",
  },
};

// AI Routes
router.get("/ai/chatgpt", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await danz.ai.ChatGpt(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({
      status: true,
      developer: dev,
      result: {
        message: data,
      },
    });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/gptlogic", async (req, res) => {
  const { query, prompt } = req.query;
  if (!query) return res.status(400).json(messages.query);
  if (!prompt)
    return res
      .status(400)
      .json({ status: 400, developer: dev, result: "Please input prompt!" });

  try {
    const data = await danz.ai.gptLogic(query, prompt);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/virtualgirl", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await danz.ai.VirtualGirlfriends(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/dystopia", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json(messages.query);

  try {
    const data = await danz.ai.dystopia(query);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/ai/ersgan", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await danz.ai.ersgan(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.post("/ai/luminai", async (req, res) => {
  const { query, username } = req.query;
  if (!query) return res.status(400).json(messages.query);
  if (!username)
    return res.status(400).json({
      status: 400,
      developer: dev,
      result: "Please input Username session!",
    });

  try {
    const data = await skrep.luminai(query, username);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

// Downloader Routes
router.get("/downloader/tiktok", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await danz.downloader.tiktok(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/igdl", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await danz.downloader.igdl(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

router.get("/downloader/spotify", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await danz.downloader.spotifyDownload(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

// Tools Routes
router.get("/tools/remini", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json(messages.url);

  try {
    const data = await danz.tools.remini(url);
    if (!data) return res.status(404).json(messages.notRes);
    res.json({ status: true, developer: dev, result: data });
  } catch (e) {
    res.status(500).json(messages.error);
  }
});

module.exports = router;
