import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Head from "next/head";
import { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link'
import { WindowDock } from "react-bootstrap-icons";


import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const Projects = (props) => {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
        <div class = "grid-container">
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
        <input type= "image" id="b5" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F303c157d-9184-4ead-87f9-d85143f9901a%3Falt%3Dmedia%26token%3D8679ce51-ac98-4599-a581-df37952895e8&w=256&q=75"/>
        <p className="style_description">Anime</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b6" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe74bbced-530e-431b-bfdc-000d4bc9eb14%3Falt%3Dmedia%26token%3Dd7697115-9284-4e10-bdc8-4086df6b376a&w=256&q=75"/>
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
        <input type= "image" id="b10" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F3b37abc0-ba66-4b71-ae06-e26c47a506cb%3Falt%3Dmedia%26token%3D0bcbe03e-ef09-466d-8c04-ac2fde6c2a37&w=256&q=75"/>
        <p className="style_description">Oil Painting</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b11" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fc5db332f-3014-4cb6-b047-de32d4b0e545%3Falt%3Dmedia%26token%3Ddbd5aa5c-847e-4a8a-afd1-93203e22e751&w=256&q=75"/>
        <p className="style_description">Da Vinci</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b12" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F15ab5570-ce7a-4456-9d6b-ae211df5ebfe%3Falt%3Dmedia%26token%3Dae0cc800-ceb6-4d35-8747-3d7829bdb90f&w=256&q=75"/>
        <p className="style_description">Comic Book</p>
        </div>
      
        <div class="grid-item">
        <input type= "image" id="b13" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe3984ae6-85b9-4898-be97-6d12d2472f44%3Falt%3Dmedia%26token%3D828048d6-49b2-445f-8f3c-eb8a38292124&w=256&q=75"/>
        <p className="style_description">Synthwave</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b14" className="small_btn" src="https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/mystical_2.jpg"/>
        <p className="style_description">Mystical</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b15" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F477d3bc0-0ee3-4637-8895-6d6cb48732aa%3Falt%3Dmedia%26token%3D3c465d8e-8dc6-44f2-bf16-f5d0d6d70f3b&w=256&q=75"/>
        <p className="style_description">Pastel</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F961a3d57-9a0e-41a1-8926-6f62abe5efd8%3Falt%3Dmedia%26token%3D3c5f7350-04b8-49ac-a45f-6817b5780bac&w=256&q=75"/>
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
      <button className="style_button" variant="primary" onClick={() => setShow(true)}>
        Artist
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
        <Modal.Body>
        <div class = "grid-container">
        <div class="grid-item">
        <input type= "image" id="b1" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F62a29b30-6a05-4157-8ae7-629c2d285285%3Falt%3Dmedia%26token%3D1e772030-d6e4-4732-a315-4068b51dd24f&w=256&q=75" />
        <p>Concept Art</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b2" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F8c047e53-a158-48f9-83bc-6666bbec2452%3Falt%3Dmedia%26token%3D08a18f76-9fd3-424a-9dd2-42e1a26c9067&w=256&q=75" />
        <p>Cyberpunk</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b3" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F6940df54-b7ae-4885-8f70-b23d1681ffa0%3Falt%3Dmedia%26token%3Db0471960-449b-416a-9a56-be330940bd14&w=256&q=75" />
        <p>Pixel Art</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b4" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe6ff7ceb-ec5f-4453-8520-3b3a61b04bf0%3Falt%3Dmedia%26token%3D301ce060-9168-4205-80d8-6616cfd70df1&w=256&q=75"/>
        <p>Space</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b5" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fc1aa5f19-8463-46a0-a8bd-3ab4f7f8cc43%3Falt%3Dmedia%26token%3D1aa21d6a-bcda-406c-ab67-de45a05a4723&w=256&q=75"/>
        <p>Tron</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b5" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F303c157d-9184-4ead-87f9-d85143f9901a%3Falt%3Dmedia%26token%3D8679ce51-ac98-4599-a581-df37952895e8&w=256&q=75"/>
        <p>Anime</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b6" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe74bbced-530e-431b-bfdc-000d4bc9eb14%3Falt%3Dmedia%26token%3Dd7697115-9284-4e10-bdc8-4086df6b376a&w=256&q=75"/>
        <p>Graphic Novel</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b8" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F56388e7a-aa95-46a9-84a7-b2a4ecdcd983%3Falt%3Dmedia%26token%3D2feedfce-5b7d-42b4-9fb0-2237e8f850b8&w=256&q=75"/>
        <p>Neon</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b9" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F28c940f5-fdcb-4838-9529-8b7998a85766%3Falt%3Dmedia%26token%3D0ea1df69-a88e-4d65-aed3-428ec58b9ba5&w=256&q=75"/>
        <p>Futurism</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b10" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F3b37abc0-ba66-4b71-ae06-e26c47a506cb%3Falt%3Dmedia%26token%3D0bcbe03e-ef09-466d-8c04-ac2fde6c2a37&w=256&q=75"/>
        <p>Oil Painting</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b11" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fc5db332f-3014-4cb6-b047-de32d4b0e545%3Falt%3Dmedia%26token%3Ddbd5aa5c-847e-4a8a-afd1-93203e22e751&w=256&q=75"/>
        <p>Da Vinci</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b12" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F15ab5570-ce7a-4456-9d6b-ae211df5ebfe%3Falt%3Dmedia%26token%3Dae0cc800-ceb6-4d35-8747-3d7829bdb90f&w=256&q=75"/>
        <p>Comic Book</p>
        </div>
      
        <div class="grid-item">
        <input type= "image" id="b15" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252Fe3984ae6-85b9-4898-be97-6d12d2472f44%3Falt%3Dmedia%26token%3D828048d6-49b2-445f-8f3c-eb8a38292124&w=256&q=75"/>
        <p>Synthwave</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/mystical_2.jpg"/>
        <p>Mystical</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F477d3bc0-0ee3-4637-8895-6d6cb48732aa%3Falt%3Dmedia%26token%3D3c465d8e-8dc6-44f2-bf16-f5d0d6d70f3b&w=256&q=75"/>
        <p>Pastel</p>
        </div>
        <div class="grid-item">
        <input type= "image" id="b16" className="small_btn" src="https://prompt.noonshot.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnoonshot-prod.appspot.com%2Fo%2Fmidjourney%252Fimages%252Fstyles%252F961a3d57-9a0e-41a1-8926-6f62abe5efd8%3Falt%3Dmedia%26token%3D3c5f7350-04b8-49ac-a45f-6817b5780bac&w=256&q=75"/>
        <p>Photorealistic</p>
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
     
     
    

     
    </div> 
   
     </div>
     </div>
    </div>
    </div>
  
</section>
  );
}
