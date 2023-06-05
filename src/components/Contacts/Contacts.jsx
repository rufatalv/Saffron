import React from "react";
import Input from "../Form/Input";

const Contacts = () => {
  return (
    <div className="mt-[72px]">
      <div className="container">
        <div id="left">
          <h1 className="font-primary text-purple-400 text-[35px]">Əlaqə</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <div>
            <div className="flex gap-5">
              <Input placeholder="Ad, Soyad*" />
              <Input placeholder="Mövzu" />
            </div>
            <div className="flex gap-5">
              {" "}
              <Input placeholder="E-mail*" />
              <Input placeholder="Telefon*" />
            </div>
            <textarea placeholder="Mesaj*" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
