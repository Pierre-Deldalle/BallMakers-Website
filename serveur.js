import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (!nom || !prenom || !email || !projet || !message) {
      return res.status(400).json({
        message: "Veuillez remplir tous les champs obligatoires.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "BallMakers <onboarding@resend.dev>",
      to: ["pierredeldallepro@gmail.com"],

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

        <p><strong>Type de projet :</strong> ${projet}</p>

        <p>
          <strong>Budget :</strong>
          ${budget || "Non renseigné"}
        </p>

        <hr />

        <h3>Description du projet</h3>

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        message: "Impossible d'envoyer le message.",
      });
    }

    res.status(200).json({
      message: "Message envoyé avec succès.",
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Une erreur est survenue.",
    });
  }
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});