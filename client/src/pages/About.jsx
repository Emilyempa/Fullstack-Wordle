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
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#4a4a4a",
              textAlign: "left",
            }}
          >
            Welcome to my Wordle-inspired Game, a fullstack application designed
            as part of an school assignment. This game challenges players to
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
                    <b>Frontend:</b> Built using React and Material-UI, with
                    Vite for an efficient development and build process.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Backend:</b> Developed with Node.js and Express.js,
                    utilizing EJS templates for server-side rendering.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Database:</b> Highscores are persistently stored in a
                    MongoDB database, ensuring dynamic and server-side rendered
                    leaderboards. The database allows efficient storage and
                    retrieval of player results, making the leaderboard fast and
                    scalable.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Testing:</b> Comprehensive end-to-end testing implemented
                    with Cypress, covering API interactions, game logic,
                    navigation flows, error handling and database operations.
                  </>
                }
              />
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
                    can submit their results (including time, guesses, and game
                    settings) to compete for the leaderboard.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Informative Pages:</b> The app includes a static "About"
                    page explaining the project and a server-side rendered
                    highscore list.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <b>Comprehensive Testing:</b> The application includes
                    thorough Cypress tests that verify:
                    <List dense sx={{ pl: 2 }}>
                      <ListItem>
                        <ListItemText
                          primary="• API endpoints for fetching words with different parameters"
                          secondary="(length and repeat letter settings)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Game logic and UI feedback"
                          secondary="(letter coloring based on correct/incorrect positions)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Navigation flows between all pages"
                          secondary="(home, about, and highscores pages)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Database operations"
                          secondary="(successful highscore submissions)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Error handling and input validation"
                          secondary="(tests empty submissions, invalid characters, and incorrect word lengths)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Mock API responses"
                          secondary="(for reliable and consistent testing)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Page content verification"
                          secondary="(ensuring correct elements render on each page)"
                        />
                      </ListItem>
                    </List>
                  </>
                }
              />
            </ListItem>
          </List>

          <Typography
            variant="body1"
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
            Thank you for checking it out, and I hope you enjoy exploring this
            project as much as I enjoyed building it! 🚀
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}

export default About;