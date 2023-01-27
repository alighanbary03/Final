import * as React from "react";
import { Gallery } from "react-grid-gallery";
import "../Style/Grid.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const images = [
  {
    src: "https://iili.io/HahRGUu.jpg",
    width: 320,
    height: 174,
    tags: [{ value: "انواع پالتو", title: "انواع پالتو" }],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
];
export default function Gridi() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Gallery rowHeight={400} images={images} />
          </Grid>
          <Grid xs={6}>
            <Gallery rowHeight={200} images={images} />
            <Gallery rowHeight={200} images={images} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
