# Meme Generator
![frontend](https://github.com/devzero-inc/meme-generator/assets/93814858/910a25be-f026-4760-8c8d-6f2e2a6c1870)

## Overview
The Meme Generator is a web application built with Remix JS that allows users to create memes dynamically. Users can select from a variety of templates, add custom text, and generate a meme image. The generated meme can then be viewed, and the link to the meme is saved in a MongoDB database for later retrieval.

## Features
- **Template Selection:** Users can choose from a list of predefined meme templates.
- **Text Customization:** Users can add custom text to their selected meme template.
- **Dynamic Meme Generation:** Memes are generated dynamically using the `https://api.memegen.link` service.
- **Database Integration:** Generated memes are saved with their URLs in MongoDB, allowing for later access and sharing.
- **Responsive Design:** The application is fully responsive and works well on both desktop and mobile devices.

## Technologies Used
- **Remix JS:** A full-stack web framework for building better user experiences with speed in mind.
- **MongoDB:** A NoSQL database used for storing meme data.

## Prerequisites
Before you begin, ensure you have the following installed:
- Docker

## Installation

Run locally: 
```bash
git clone https://github.com/devzero-inc/meme-generator.git
cd meme-generator
docker compose up
```
App will be running on ```PORT:3000``` -> [http://localhost:3000/](http://localhost:3000/)

Now just go to [http://localhost:3000/](http://localhost:3000/) and explore the application.