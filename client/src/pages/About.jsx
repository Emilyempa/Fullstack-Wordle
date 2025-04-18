import {
  Container,
  Typography,
  Stack,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function About() {
  return (
    <Container
      maxWidth="md"
      sx={{
        paddingY: 8,
        paddingX: { xs: 2, md: 4 },
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: { xs: 3, md: 6 },
          borderRadius: "16px",
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#fff",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <Stack spacing={4}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#003049",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 1.2,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            About This Project
          </Typography>

          <Divider
            sx={{
              width: "70%",
              marginX: "auto",
              marginBottom: 4,
              borderColor: "#ddd",
            }}
          />

          <Typography
            variant="body1"
            component="div"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#4a4a4a",
              textAlign: "left",
            }}
          >
            Welcome to my Wordle-inspired Game, a fullstack application designed
            as part of a school assignment. This game challenges players to
            guess words based on strategic feedback and includes features like a
            customizable difficulty level, a real-time timer, and a highscore
            system.
          </Typography>

          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            Technologies Used:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Frontend:</b> Built using React and Material-UI.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Backend:</b> Developed with Node.js and Express.js.
                  </>
                }
              />
            </ListItem>
          </List>

          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            Deployment & Hosting:
          </Typography>

          <Typography
            variant="body1"
            component="div"
            sx={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "#000000",
              textAlign: "left",
            }}
          >
            This full-stack application has been successfully deployed using{" "}
            <b>Render</b>, ensuring high availability and scalability.
          </Typography>

          <List dense sx={{ pl: 2 }}>
            <ListItem>
              <ListItemText primary="• Backend hosting & database integration on Render." />
            </ListItem>
            <ListItem>
              <ListItemText primary="• Secure environment configuration leveraging MongoDB Atlas." />
            </ListItem>
          </List>

          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            Key Features:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Dynamic Gameplay:</b> Players can adjust the word length
                    and decide whether repeated letters are allowed before
                    starting the game.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Highscore System:</b> After completing a round, players
                    can submit their results to compete for the leaderboard.
                  </>
                }
              />
            </ListItem>
          </List>

          <Typography
            variant="body1"
            component="div"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#4a4a4a",
              textAlign: "left",
            }}
          >
            This project demonstrates fullstack development skills, showcasing
            both frontend and backend integration along with database
            management. It was created to explore best practices in modern web
            development including comprehensive testing strategies.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "#4a4a4a",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Thank you for checking it out! 🚀
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}

export default About;
