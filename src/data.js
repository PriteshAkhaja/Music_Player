import { v4 as uuidv4 } from "uuid"

function chillHop() {
  return [
    {
      name: "Hereafter",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#1052B2", "#F9BB62"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
    },
    {
      name: "Seascape",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1052B2", "#F9BB62"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",
    },
    {
      name: "Melancholy",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1052B2", "#F9BB62"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11778",
    },
  ]
}

export default chillHop
