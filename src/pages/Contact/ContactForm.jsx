import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
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
          <Button variant="contained" sx={{ mt: 2, backgroundColor: "#333", color: "white" }}>
            descargar CV INGLES
          </Button>
          <Button variant="contained" sx={{ mt: 2, backgroundColor: "#333", color: "white"  }}>
            descargar CV ESPAÑOL
          </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;