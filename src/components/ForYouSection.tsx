import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";

interface NewsItem {
  id: number;
  title: string;
  timestamp: string;
  source: string;
  author?: string;
  image: string;
}

const forYouSection: NewsItem[] = [
  {
    id: 1,
    title:
      "Top Auckland chefs unite for this year's Kelmarna Farm Dinner series",
    timestamp: "9 hours ago",
    source: "New Zealand Herald",
    author: "Laisha Jones",
    image: "https://picsum.photos/64",
  },
  {
    id: 2,
    title: "Turkish Airlines eyeing Auckland-Istanbul flights - report",
    timestamp: "1 hour ago",
    source: "New Zealand Herald",
    author: "Grant Bradley",
    image: "https://picsum.photos/64",
  },
  {
    id: 3,
    title: "A short history of permanent temporary buildings in New Zealand",
    timestamp: "5 hours ago",
    source: "SpinOff",
    image: "https://picsum.photos/64",
  },
  {
    id: 4,
    title:
      "Top Auckland chefs unite for this year's Kelmarna Farm Dinner series",
    timestamp: "9 hours ago",
    source: "New Zealand Herald",
    author: "Laisha Jones",
    image: "https://picsum.photos/64",
  },
  {
    id: 5,
    title: "Turkish Airlines eyeing Auckland-Istanbul flights - report",
    timestamp: "1 hour ago",
    source: "New Zealand Herald",
    author: "Grant Bradley",
    image: "https://picsum.photos/64",
  },
  {
    id: 6,
    title: "A short history of permanent temporary buildings in New Zealand",
    timestamp: "5 hours ago",
    source: "SpinOff",
    image: "https://picsum.photos/64",
  },
];

const NewsLayout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        maxWidth: "1216px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { md: "16px" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          {forYouSection.slice(0, 3).map((news) => (
            <Card
              key={news.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                boxShadow: "none",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <CardContent sx={{ flex: 1, paddingLeft: 0 }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold", marginBottom: "8px" }}
                >
                  {news.source}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginBottom: "8px" }}
                >
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.timestamp} {news.author && `• By ${news.author}`}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "8px",
                  marginLeft: { md: "16px" },
                  marginTop: { xs: "16px", md: "0" },
                }}
                image={news.image}
                alt={news.title}
              />
            </Card>
          ))}
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "#e0e0e0",
            width: "1px",
          }}
        />

        <Box sx={{ flex: 1 }}>
          {forYouSection.slice(3, 6).map((news) => (
            <Card
              key={news.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                boxShadow: "none",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <CardContent sx={{ flex: 1, paddingLeft: 0 }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold", marginBottom: "8px" }}
                >
                  {news.source}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginBottom: "8px" }}
                >
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.timestamp} {news.author && `• By ${news.author}`}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "8px",
                  marginLeft: { md: "16px" },
                  marginTop: { xs: "16px", md: "0" },
                }}
                image={news.image}
                alt={news.title}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLayout;
