import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';


import 'react-multi-carousel/lib/styles.css';

import { WindowDock } from "react-bootstrap-icons";


import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import Canvas from "./canvas";
import PromptForm from "./prompt-form";
import Dropzone from "./dropzone";
import Download from "./download";
import { XCircle as StartOverIcon } from "lucide-react";
import { Code as CodeIcon } from "lucide-react";
import { Rocket as RocketIcon } from "lucide-react";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const Projects = (props) => {
  const [open, setOpen] = useState(false);
  const [open_artist, setOpen_artist] = useState(false);

  const [show, setShow] = useState(false);
  const[show_artist, setShow_artist] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose_artist = () => setShow_artist(false);
  const handleShow_artist = () => setShow_artist(true);

  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);
  const [maskImage, setMaskImage] = useState(null);
  const [userUploadedImage, setUserUploadedImage] = useState(null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prevPrediction = predictions[predictions.length - 1];
    const prevPredictionOutput = prevPrediction?.output
      ? prevPrediction.output[prevPrediction.output.length - 1]
      : null;

    const body = {
      prompt: "brad pitt, hyper detailed, dramatic lighting, cgsociety, realistic, hyper detailed, insane details, intricate, dramatic lighting, hypermaximalist, golden ratio, rule of thirds, octane render, weta digital, micro details, ultra wide angle, artstation trending, 8 k",
      init_image: userUploadedImage
        ? await readAsDataURL(userUploadedImage)
        : // only use previous prediction as init image if there's a mask
        maskImage
        ? prevPredictionOutput
        : null,
      mask: maskImage,
    };

    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const prediction = await response.json();

    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPredictions(predictions.concat([prediction]));

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPredictions(predictions.concat([prediction]));

      if (prediction.status === "succeeded") {
        setUserUploadedImage(null);
      }
    }
  };



  const startOver = async (e) => {
    e.preventDefault();
    setPredictions([]);
    setError(null);
    setMaskImage(null);
    setUserUploadedImage(null);
  };


  return (
    <section className="skill" id="project">
    

      
    <div className="container">
      
        <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                <section class="step-wizard">

            <ul class="step-wizard-list">
            <li class="step-wizard-item">
                <span class="progress-count">1</span>
                <span class="progress-label">Movie Charateristics</span>
            </li>
            <li class="step-wizard-item current-item">
                <span class="progress-count">2</span>
                <span class="progress-label">Visualise Your Movie</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">3</span>
                <span class="progress-label">Review Results</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">4</span>
                <span class="progress-label">Review Your Movie With AI</span>
            </li>
        </ul>
    
    </section>
      <h2 className="title">Visualise Your Movie</h2>
      <br></br>
      <br></br>
      <p className="image_subheading">Using Stable Diffusion you can bring your imaginations to life.</p>
      <p>Create a vision for your movie characters, settings and plots ... All through the power of AI</p>
      <br></br>
      <br></br>
      

    
  

      <h3 className="character_image_sub">Character Visualisation</h3>
      <br></br>
      <br></br>
    
   
    <div id = "second">
    <br></br>
    <br></br>
    
    <h4 className="character_h3">Select the Art Style, Artist as well as other details to provide a more personal touch to your character</h4>
    <br></br>
    <br></br>
   
    <p className="art_style_sub_heading">Select Art Style(s) of your own choice</p>

    <button className="style_button" variant="primary" onClick={() => setShow(true)}>
        Art Style
      </button>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-120w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="style_popup">
        <div className= "grid-container">
        <div class="grid-item">
        <input type= "image" id="b1" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F62a29b30-6a05-4157-8ae7-629c2d285285%3Falt%3Dmedia%26token%3D1e772030-d6e4-4732-a315-4068b51dd24f&w=256&q=75" />
        <p className="style_description">Concept Art</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b2" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F8c047e53-a158-48f9-83bc-6666bbec2452%3Falt%3Dmedia%26token%3D08a18f76-9fd3-424a-9dd2-42e1a26c9067&w=256&q=75" />
        <p className="style_type">Cyberpunk</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b3" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F6940df54-b7ae-4885-8f70-b23d1681ffa0%3Falt%3Dmedia%26token%3Db0471960-449b-416a-9a56-be330940bd14&w=256&q=75" />
        <p className="style_description">Pixel Art</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b4" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe6ff7ceb-ec5f-4453-8520-3b3a61b04bf0%3Falt%3Dmedia%26token%3D301ce060-9168-4205-80d8-6616cfd70df1&w=256&q=75"/>
        <p className="style_description">Space</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b5" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fc1aa5f19-8463-46a0-a8bd-3ab4f7f8cc43%3Falt%3Dmedia%26token%3D1aa21d6a-bcda-406c-ab67-de45a05a4723&w=256&q=75"/>
        <p className="style_description">Tron</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b6" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F303c157d-9184-4ead-87f9-d85143f9901a%3Falt%3Dmedia%26token%3D8679ce51-ac98-4599-a581-df37952895e8&w=256&q=75"/>
        <p className="style_description">Anime</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b7" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe74bbced-530e-431b-bfdc-000d4bc9eb14%3Falt%3Dmedia%26token%3Dd7697115-9284-4e10-bdc8-4086df6b376a&w=256&q=75"/>
        <p className="style_description">Graphic Novel</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b8" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F56388e7a-aa95-46a9-84a7-b2a4ecdcd983%3Falt%3Dmedia%26token%3D2feedfce-5b7d-42b4-9fb0-2237e8f850b8&w=256&q=75"/>
        <p className="style_description">Neon</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b9" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F28c940f5-fdcb-4838-9529-8b7998a85766%3Falt%3Dmedia%26token%3D0ea1df69-a88e-4d65-aed3-428ec58b9ba5&w=256&q=75"/>
        <p className="style_description">Futurism</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b11" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F3b37abc0-ba66-4b71-ae06-e26c47a506cb%3Falt%3Dmedia%26token%3D0bcbe03e-ef09-466d-8c04-ac2fde6c2a37&w=256&q=75"/>
        <p className="style_description">Oil Painting</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b12" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fc5db332f-3014-4cb6-b047-de32d4b0e545%3Falt%3Dmedia%26token%3Ddbd5aa5c-847e-4a8a-afd1-93203e22e751&w=256&q=75"/>
        <p className="style_description">Da Vinci</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b13" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F15ab5570-ce7a-4456-9d6b-ae211df5ebfe%3Falt%3Dmedia%26token%3Dae0cc800-ceb6-4d35-8747-3d7829bdb90f&w=256&q=75"/>
        <p className="style_description">Comic Book</p>
        </div>
      
        <div class="grid-item">
        <input type= "image" id="b14" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe3984ae6-85b9-4898-be97-6d12d2472f44%3Falt%3Dmedia%26token%3D828048d6-49b2-445f-8f3c-eb8a38292124&w=256&q=75"/>
        <p className="style_description">Synthwave</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b15" className="small_btn" src="https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/mystical_2.jpg"/>
        <p className="style_description">Mystical</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F477d3bc0-0ee3-4637-8895-6d6cb48732aa%3Falt%3Dmedia%26token%3D3c465d8e-8dc6-44f2-bf16-f5d0d6d70f3b&w=256&q=75"/>
        <p className="style_description">Pastel</p>
        </div>
        <div class="grid-item">
        <input type= "image"  id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F961a3d57-9a0e-41a1-8926-6f62abe5efd8%3Falt%3Dmedia%26token%3D3c5f7350-04b8-49ac-a45f-6817b5780bac&w=256&q=75"/>
        <p className="style_description">Photorealistic</p>
        </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      

    
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
     
      <p className="art_style_sub_heading">Select an Artist to inspire your visualisations</p>
     
      <button className="style_button" variant="primary" onClick={() => setShow_artist(true)}>
        Artist
      </button>

      <Modal
        size="lg"
        show={show_artist}
        onHide={() => setShow_artist(false)}
        dialogClassName="modal-120w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class = "grid-container">
        <div class="grid-item">
        <input type= "image" id="b3" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F6cfd7569-6943-4d43-ae6d-5ac0449d0cf0%3Falt%3Dmedia%26token%3D0d216a9e-16f6-4db0-9f2b-3be271866988&w=256&q=75" />
        <p className="style_description">Alphonse Mucha</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b3" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252Fd40fce58-9fca-4f2e-8d00-899db478e531%3Falt%3Dmedia%26token%3D202659ea-d985-4557-b2df-04e5789af0f1&w=256&q=75" />
        <p className="style_description">Andy Warhol</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b3" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F4394e097-53e5-4fce-bd8a-480ae8946584%3Falt%3Dmedia%26token%3D6c631bcd-d1b7-4fd6-a701-a2f1f6be45df&w=256&q=75" />
        <p className="style_description">David Hockney</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b4" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252Fc6f4fcaf-a4ad-4eb6-b002-ac23dcf9236f%3Falt%3Dmedia%26token%3D2887d69a-99e6-487b-892c-ca8565a5bfd7&w=256&q=75"/>
        <p className="style_description">Francis Bacon</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b5" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252Ff2a14bfc-418c-4a04-bfd4-e030cd2dc035%3Falt%3Dmedia%26token%3D25e293aa-047c-4c10-9312-03b19a7332e2&w=256&q=75"/>
        <p className="style_description">Garald Brom</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b5" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252Ffa5a3d16-ba45-4289-83b4-ed75a9fff812%3Falt%3Dmedia%26token%3Dff16870c-9277-442b-9208-94fbd9049fd9&w=256&q=75"/>
        <p className="style_description">Eugene Delacroix</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b6" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F1412963e-a8ae-47b5-8800-f884d18f8a57%3Falt%3Dmedia%26token%3D265341d1-cac7-47fc-8a49-1c00c01cd0e1&w=256&q=75"/>
        <p className="style_description">Edgar Degas</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b8" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F8eea72e2-c5a0-4ebc-b5a3-b8b7d81b5867%3Falt%3Dmedia%26token%3Db0325ea7-7d0c-4bc6-aeb6-25b94afb166a&w=256&q=75"/>
        <p className="style_description">Michelangelo</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b9" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F5e0e39ed-7f4c-4c8d-a140-958a23bf9fae%3Falt%3Dmedia%26token%3Df2669219-b373-46bb-807e-23c287f6b353&w=256&q=75"/>
        <p className="style_description">Van Gogh</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b10" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F9ab3308f-eb68-4909-ba32-cbbac0566d7c%3Falt%3Dmedia%26token%3D615b6608-7859-453e-8de2-cb0cc5f17f37&w=256&q=75"/>
        <p className="style_description">Monet</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b11" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F8fd16c58-6690-494f-a9b7-589bc977bbee%3Falt%3Dmedia%26token%3D79b66db3-8588-4d36-b42c-6e04eade293d&w=256&q=75"/>
        <p className="style_description">Leonardo Da Vinci</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b12" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F8c94af4a-cfae-4085-885e-7c6829b5c937%3Falt%3Dmedia%26token%3Dcf241173-bc93-4297-b5cd-25e7c1767cf6&w=256&q=75"/>
        <p className="style_description">Paul Gauguin</p>
        </div>
      
        <div class="grid-item">
        <input type= "image" id="b15" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F3563b73e-b1ed-41dd-b3f7-3f4f3c127c55%3Falt%3Dmedia%26token%3D0c331977-ed33-4279-918b-d6c60d087552&w=256&q=75"/>
        <p className="style_description">Willem De Koonig</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F0df99953-3c7c-4129-88a9-bd72235fd376%3Falt%3Dmedia%26token%3De53cd315-955e-402e-8e4c-97e01b2b45f7&w=256&q=75"/>
        <p className="style_description">Yoji Shinkawa</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252F53443579-182c-411c-aa46-0713549c6c4a%3Falt%3Dmedia%26token%3D477492df-415f-4273-9827-0cd0e7036f3a&w=256&q=75"/>
        <p className="style_description">JMW Turner</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fartists%252Fffce3583-667d-4629-9d67-64bd15fcb033%3Falt%3Dmedia%26token%3D0d78ce92-6c89-40e9-85e0-9e1c72788841&w=256&q=75"/>
        <p className="style_description">Johannes Vermeer</p>
        </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose_artist}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose_artist}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      <p className="art_style_sub_heading">Do you want your Character to represent a real life actor?</p>

      <div className="real_life_actor">
      <button className="real_life_actor_yes">Yes</button>
      <button className="real_life_actor_no">No</button>
      </div>

     
     
     
    

     
    </div> 
    <main className='Stable_Diff_Character'>
       {error && <div>{error}</div>}

       <div className="border-hairline max-w-[512px] mx-auto">
         
        
         <div
           className="bg--50 relative max-h-[1500px] w-full flex items-stretch"
         
         >
           <Canvas
             predictions={predictions}
             userUploadedImage={userUploadedImage}
             onDraw={setMaskImage}
           />
         </div>
        
       </div>

       <div className="SD-canvas">
         <PromptForm onSubmit={handleSubmit} />

         <div className="text-center">
           {((predictions.length > 0 &&
             predictions[predictions.length - 1].output) ||
             maskImage ||
             userUploadedImage) && (
             <button className="lil-button" onClick={startOver}>
               <StartOverIcon className="icon" />
               Start over
             </button>
           )}

           <Download predictions={predictions} />
          
         
           
         </div>
       </div>
     </main>
   
     </div>
     </div>
    </div>
    </div>
  
</section>
  );
}
function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onerror = reject;
    fr.onload = () => {
      resolve(fr.result);
    };
    fr.readAsDataURL(file);
  });
}
