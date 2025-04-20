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
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            About This Project
          </Typography>

          <Divider
            sx={{ width: "70%", marginX: "auto", borderColor: "#ddd" }}
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
            Welcome to my Wordle-inspired Game, a fullstack JavaScript
            application designed as part of a school assignment. This game
            challenges players to guess words based on strategic feedback and
            includes features like a customizable difficulty level, a real-time
            timer, and a highscore system.
          </Typography>

          <Divider
            sx={{ width: "70%", marginX: "auto", borderColor: "#ddd" }}
          />

          <Box component="section">
            <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
              Technologies Used:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Frontend:"
                  secondary="Built using React and Material-UI, with Vite for an efficient development and build process."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Backend:"
                  secondary="Developed with Node.js and Express.js, utilizing EJS templates for server-side rendering."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Database:"
                  secondary="Highscores are persistently stored in a MongoDB database, ensuring dynamic and server-side rendered leaderboards."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Testing:"
                  secondary="Comprehensive end-to-end testing implemented with Cypress."
                />
              </ListItem>
            </List>
          </Box>

          <Divider
            sx={{ width: "70%", marginX: "auto", borderColor: "#ddd" }}
          />

          <Box component="section">
            <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
              Deployment & Hosting:
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontSize: "0.9rem",
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              This full-stack application has been successfully deployed using{" "}
              <Box component="span" fontWeight="bold">
                Render
              </Box>
              , ensuring high availability and scalability.
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Backend hosting & database integration on Render." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Secure environment configuration leveraging MongoDB Atlas." />
              </ListItem>
            </List>
          </Box>

          <Divider
            sx={{ width: "70%", marginX: "auto", borderColor: "#ddd" }}
          />

          <Box component="section">
            <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
              Key Features:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Dynamic Gameplay"
                  secondary="Players can customize their experience by selecting word length and toggling duplicate letter rules, while receiving real-time visual feedback through an intuitive color-coding system."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Informative Pages"
                  secondary="The app includes a static 'About' page explaining the project and a server-side rendered highscore list."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Comprehensive Testing"
                  secondary={
                    <>
                      The application includes thorough Cypress tests that
                      verify:
                      <Box component="div" sx={{ pl: 2, mt: 1, mb: 0 }}>
                        <Typography component="div">
                          Game logic, UI feedback, API calls
                        </Typography>
                        <Typography component="div">
                          Database operations, error handling
                        </Typography>
                        <Typography component="div">
                          Navigation & content validation
                        </Typography>
                      </Box>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Box>

          <Divider
            sx={{ width: "70%", marginX: "auto", borderColor: "#ddd" }}
          />

          <Typography
            variant="body1"
            component="div"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#4a4a4a",
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
