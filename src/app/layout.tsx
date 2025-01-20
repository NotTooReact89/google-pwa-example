"use client";

import "./globals.css";
import { Box, CssBaseline, Typography } from "@mui/material";
import Header from "../components/Header";
import NewsSection from "@/components/NewsSection";

export default function RootLayout() {
  return (
    <html>
      <head>
        <title>News App</title>
      </head>
      <body style={{ backgroundColor: "#f5f5f5", margin: 0, padding: 0 }}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <CssBaseline />
          <Header />
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                maxWidth: "1200px",
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                gap: { xs: "16px", md: "16px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="h4">Your briefing</Typography>
                <Typography variant="body1">
                  {new Intl.DateTimeFormat("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  }).format(new Date())}
                </Typography>
              </Box>
            </Box>
          </Box>
          <NewsSection />
        </Box>
      </body>
    </html>
  );
}
