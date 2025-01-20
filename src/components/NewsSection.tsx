import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Divider,
  Grid,
} from "@mui/material";
import ForYouSection from "./ForYouSection";

const topStoriesSection = [
  {
    title: "Flying fox 'snaps' at popular campground, person seriously injured",
    timestamp: "36 minutes ago",
    source: "New Zealand Herald",
    image: "https://picsum.photos/100",
  },
  {
    title:
      "Trump promises 'Iron Dome' shield, release of JFK secrets, to 'fix every single crisis'",
    timestamp: "3 hours ago",
    source: "RNZ",
    author: "Tim Reid and Joseph Ax",
    image: "https://picsum.photos/100",
  },
  {
    title: "Historic warbirds dazzle at Classic Flyers Aero Day event",
    timestamp: "3 hours ago",
    source: "New Zealand Herald",
    image: "https://picsum.photos/100",
  },
];

const localNewsSection = [
  {
    title:
      "Top Auckland chefs unite for this year's Kelmarna Farm Dinner series",
    timestamp: "9 hours ago",
    source: "New Zealand Herald",
    author: "Laisha Jones",
    image: "https://picsum.photos/64",
  },
  {
    title: "Turkish Airlines eyeing Auckland-Istanbul flights - report",
    timestamp: "1 hour ago",
    source: "New Zealand Herald",
    author: "Grant Bradley",
    image: "https://picsum.photos/64",
  },
  {
    title: "A short history of permanent temporary buildings in New Zealand",
    timestamp: "5 hours ago",
    source: "SpinOff",
    image: "https://picsum.photos/64",
  },
];

const NewsSection = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        padding: { xs: "16px", md: "0" },
      }}
    >
      <Grid
        container
        spacing={{ md: 2 }}
        gap={2}
        sx={{ marginLeft: "0", marginTop: 2 }}
      >
        <Grid
          item
          xs={12}
          md={7.5}
          sx={{
            marginBottom: { xs: "16px", md: "0" },
            paddingRight: { md: "16px" },
            backgroundColor: "#fff",
            borderRadius: "16px",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Top stories
            </Typography>
            <Divider />
            {topStoriesSection.map((item, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "16px",
                  boxShadow: "none",
                  borderBottom: "1px solid #e0e0e0",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.timestamp} {item?.author && `• By ${item?.author}`}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, borderRadius: "8px" }}
                  image={item.image}
                  alt="News Thumbnail"
                />
              </Card>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            paddingLeft: { md: "16px" },
            backgroundColor: "#fff",
            borderRadius: "16px",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Local news
            </Typography>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              sx={{ marginBottom: "16px" }}
            >
              <Tab label="Auckland" />
              <Tab label="Mangawhai" />
            </Tabs>
            <Divider />
            {localNewsSection.map((item, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                  boxShadow: "none",
                  borderBottom: "1px solid #e0e0e0",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.timestamp} {item?.author && `• By ${item?.author}`}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 64, height: 64, borderRadius: "8px" }}
                  image={item.image}
                  alt="News Thumbnail"
                />
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "16px",
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "16px",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          Picks for you
        </Typography>

        <Divider />
        <ForYouSection />
      </Box>
    </Box>
  );
};

export default NewsSection;
