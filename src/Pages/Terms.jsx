import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5"> Our Terms & Conditions</h1>
      <p className="mb-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        minima iusto repellendus accusantium fugit ducimus exercitationem
        voluptatem voluptate itaque, nulla eos ipsum quod possimus nobis
        adipisci facilis dolorum labore praesentium reprehenderit cumque, velit
        recusandae est aliquid corporis! Deserunt, ullam! Hic, cumque at
        perspiciatis magnam commodi veniam temporibus porro necessitatibus
        corrupti vel quas amet totam id itaque voluptatum! Voluptas alias
        numquam eos quos soluta eveniet quaerat nesciunt magnam ex aperiam
        eligendi, odit, dignissimos sequi aut amet quod fugit natus blanditiis
        corporis?
      </p>
      <Link to="/register" className="bg-blue-500 p-3 text-white">
        Go back to Register Page
      </Link>
    </div>
  );
};

export default Terms;
