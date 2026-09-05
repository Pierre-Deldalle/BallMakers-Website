import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

/* =========================
   CORS
========================= */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ballmakers.netlify.app",
      "https://ballmakers.fr",
      "https://www.ballmakers.fr",
    ],
  })
);

app.use(express.json());

/* =========================
   RESEND
========================= */

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================
   TEST API
========================= */

app.get("/", (req, res) => {
  res.send("BallMakers API is running!");
});

/* =========================
   CONTACT
========================= */

app.post("/api/contact", async (req, res) => {
  try {
    const {
      nom,
      prenom,
      email,
      organisation,
      projet,
      budget,
      message,
    } = req.body;

    // Vérification des champs obligatoires
    if (!nom || !prenom || !email || !projet || !message) {
      return res.status(400).json({
        message: "Veuillez remplir tous les champs obligatoires.",
      });
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: "BallMakers <onboarding@resend.dev>",

      to: ["ballmakers92@icloud.com"],

      replyTo: email,

      subject: `Nouvelle demande BallMakers - ${prenom} ${nom}`,

      html: `
        <h2>Nouvelle demande depuis BallMakers</h2>

        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Prénom :</strong> ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>

        <p>
          <strong>Organisation :</strong>
          ${organisation || "Non renseignée"}
        </p>

        <p>
          <strong>Type de projet :</strong>
          ${projet}
        </p>

        <p>
          <strong>Budget :</strong>
          ${budget || "Non renseigné"}
        </p>

        <hr />

        <h3>Description du projet</h3>

        <p>${message}</p>
      `,
    });

    // Erreur Resend
    if (error) {
      console.error("Erreur Resend :", error);

      return res.status(500).json({
        message: "Impossible d'envoyer le message.",
      });
    }

    // Succès
    return res.status(200).json({
      message: "Message envoyé avec succès.",
      data,
    });
  } catch (error) {
    console.error("Erreur serveur :", error);

    return res.status(500).json({
      message: "Une erreur est survenue.",
    });
  }
});

/* =========================
   SERVEUR
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur BallMakers lancé sur le port ${PORT}`);
});