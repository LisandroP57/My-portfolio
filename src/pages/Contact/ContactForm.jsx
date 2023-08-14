import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "./contactmodule.css"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.title = "Lisandro Palavecino | Contacto";
  }, []);

  return (
    <Box
      className="contact-form-container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className="contact-form"
        sx={{ mx: "auto", p: 2 }}>
        <Typography variant="h3" align="center" mb={2}>
          Contactemonos!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <div className="btn-container">
          <Button variant="contained" type="submit" sx={{ mt: 2, fontSize: "15px", fontWeight: "600" }}>
            Enviar
          </Button>
          </div>
          <div className="cv-option">
            <a href="https://drive.google.com/file/d/1WQmnXuLk6_46Gy29ayFfjAfM8qLFonpU/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: "#333", color: "white" }}>
                descargar CV ESPAÑOL
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1JrhcQ7zzeDd1aYXLAWSVmOFXI3FstEWR/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: "#333", color: "white" }}>
                descargar CV INGLES
              </Button>
            </a>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;