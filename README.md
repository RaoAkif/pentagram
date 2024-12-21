![Headstarter Banner](https://github.com/user-attachments/assets/80ea1608-e1b1-466f-9153-99153f4a65b8)
# **Instant Imaginator: Realtime Image Diffusion**

> Instant Imaginator is a web app that enables users to generate images from text prompts using a self-hosted image generation model, like Stable Diffusion, on serverless GPUs. It offers an Instagram-like experience, where users can create, like, comment, and share images, all while ensuring low-latency performance for a smooth interaction.

## Project Overview

In this project, you will build a web app where users can generate images using text prompts via an image generation model that you host on serverless GPUs.

### **Technologies Used:**

- **React** 
- **TypeScript**
- **Modal**
- **APIs**
- **Authentication**
- **Hardware Infrastructure**

### **Project Concept:**

Instead of users uploading their own pictures, they can generate images with text prompts. You'll host an image generation model (e.g., Stable Diffusion) yourself on serverless GPUs, ensuring low-latency performance for a smooth user experience. This app will have an Instagram-like interface, where users can interact socially through likes, comments, and sharing features. 

---

## **Getting Started**

### **1. Clone the Repository**

First, clone the GitHub repository:

```bash
git clone https://github.com/team-headstart/pentagram.git
```

Navigate to the project directory:

```bash
cd pentagram
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## **Tasks**

### **Important Files to Review**

- **`src/app/page.tsx`:**  
  This is where the user can input their prompt and generate an image. Ensure that you update the UI and handle the API response to display the generated images.

- **`src/app/api/generate-image/route.ts`:**  
  This is where the image generation API is implemented. Make sure to call your image generation API hosted on Modal here.

---

## **Project Requirements**

- **Host an Image Generation Model on Serverless GPUs:**  
  Host a model like Stable Diffusion on Modal, ensuring low-latency performance for a smooth user experience.
  
- **Web App Features:**  
  Create a web app that allows users to generate images from text prompts, manage their creations, and interact socially with features like likes, comments, and sharing.

- **UI/UX and Image Management:**  
  Build an intuitive UI/UX with proper authentication and efficient image management. Include a prompt history to enhance the user experience.

---

## **Resources**

Here are some useful resources to get started:

- **[Getting Started with Modal](https://modal.com/docs)**
- **[Building an Image Generation Pipeline on Modal](https://modal.com/blog/image-generation-pipeline)**
- **[Stable Diffusion as CLI, API, and Web UI](https://github.com/CompVis/stable-diffusion)**
- **[Midjourney Examples](https://www.midjourney.com)**
- **[NVIDIA GPU Comparison](https://www.nvidia.com/en-us/geforce/gpus/)**
- **[Modal Cold Start Guide](https://modal.com/docs/cold-start)**
- **[Modal Playground](https://modal.com/playground)**

---

## **Learn More**

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and APIs.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

---

## **Authors**

👤 **Rao Akif**

- GitHub: [@raoakif](https://github.com/raoakif)
- Twitter: [@raoakif](https://twitter.com/raoakif)
- LinkedIn: [RaoAkif](https://linkedin.com/in/raoakif)

---

## **Contributing**

Contributions, issues, and feature requests are welcome! Check the [issues page](https://github.com/team-headstart/pentagram/issues) for ongoing issues.

---

## **Acknowledgments**

- Inspiration from image generation platforms like **Midjourney** and **Stable Diffusion**.
- Thanks to Modal for providing serverless GPU hosting.
  
## **License**

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

This update brings the README in line with the specific requirements for hosting image generation models and handling user interactions through a web app.
