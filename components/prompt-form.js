import { useState } from "react";

const samplePrompts = [
  " Mario In a Swimming Pool"
];
import sample from "lodash/sample";

export default function PromptForm(props) {
  const [prompt] = useState(sample(samplePrompts));
  const [image, setImage] = useState(null);

  return (
    <form
      onSubmit={props.onSubmit}
      className="py-5 animate-in fade-in duration-700"
    >
      <div className="flex max-w-[512px]">
        

      <button className="sd_generate_button" >
          Generate
        </button>
      </div>
    </form>
  );
}
