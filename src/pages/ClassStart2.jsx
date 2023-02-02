import React from "react";
import Nav from "../components/Nav";
import Next from "../assests/next.png";
import Tick from "../assests/tickk.png";
import Text from "../assests/text.png";
import Like from "../assests/Like.png";
import Back from "../assests/back1.png";
import Img from "../assests/img1.png";
import pdf from "../assests/pdficon.png";
import ClassTestcard2 from "../components/ClassTestcard2";
import ClassTestcard1 from "../components/ClassTestcard1";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BasicModal from "../components/PdfModal";
import Sidebar from "../components/Sidebar";

const ClassStart2 = () => {
  const routePath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath.pathname]);
  const cardlist = [
    {
      img: Tick,
      text: "video",
    },
    {
      img: Tick,
      text: "video",
    },
    {
      img: Tick,
      text: "video",
    },
    {
      img: Tick,
      text: "Reading",
    },
    {
      img: Tick,
      text: "video",
    },
    {
      img: Tick,
      text: "Reading",
    },
  ];
  const cardlist2 = [
    {
      img: Text,
      text: "Quiz",
    },
  ];
//   const[open,setOpen]=useState(false);
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (
    <div className="mb-10">
      <Nav />
      <Sidebar/>
      <div className="flex-col mx-20">
        <div className="my-10 flex text-2xl font-semibold text-black  items-center space-x-2">
          <p className="text-[#FE7524]">UI UX Design Course by - Adam Evan </p>
          <img src={Next} alt="back" className=" w-2 h-2" />
          <p className="text-[#FE7524]">Week 2</p>
          <img src={Next} alt="next" className=" w-2 h-2  " />
          <p>Importance of using panels</p>
        </div>
        <div className="my-7 space-x-14 flex">
          <div className=" text-lg font-semibold text-black">
            <p>Introduction to Course 1</p>
          </div>
          <div className="flex space-x-4">
            <img src={Next} alt="back" className="rotate-180" />
            <p>Back</p>
            <p>Next</p>
            <img src={Next} alt="back" />
          </div>
        </div>
        <div className="flex space-x-28 ">
          <div className="flex-col space-y-4 my-2 items-center">
            {
              cardlist.map((elem, index) => (
                <ClassTestcard1 key={index} img={elem.img} text={elem.text} />
              ))
              //   <ClassTestcard />
            }
            {
              cardlist2.map((elem, index) => (
                <ClassTestcard2 key={index} img={elem.img} text={elem.text} />
              ))
              //   <ClassTestcard />
            }
          </div>
          <div className="flex-col relative space-y-5">
            <div className="text-black text-5xl font-semibold">
              <p>Importance of using panels</p>
            </div>
            <img
              src={Img}
              alt="img"
              className="w-[600px] h-[380px] rounded-b-3xl"
            />
          </div>
        </div>
        <div className="text-sm font-medium text-[#6C6C6C] mt-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sem
            iaculis enim leo tempus non. Quis non etiam lorem nunc non donec.
            Eget risus et elementum laoreet dis pellentesque non est. Sed
            tincidunt mattis sapien tempor sit mi,-- malesuada nunc. Neque
            egestas posuere neque ipsum ut. Laoreet auctor libero cras in nisl
            sapien. Odio ipsum ac netus lorem nulla aliquam nisl enim. Tristique
            at nec enim nunc, dolor. Sed tristique imperdiet pellentesque quam
            mi vestibulum, congue. Elit blandit arcu porttitor malesuada sit mi
            gravida. Parturient a eu vitae molestie tempor. Turpis elementum
            nulla morbi eget. Viverra risus eget ac urna eget justo, porta.
            Mauris viverra ultricies tempor lacus. Venenatis sodales nunc est ut
            sed tortor. Eget donec amet velit venenatis nibh pellentesque. Risus
            vitae auctor vitae hendrerit. Sodales magna aliquam cras urna. Arcu
            varius consectetur vitae, faucibus amet, sagittis nunc luctus
            scelerisque. Ipsum vestibulum cursus purus fringilla eu sed lacus
            libero. Neque sollicitudin pretium vehicula tempus etiam. Et
            sagittis venenatis vulputate senectus quis egestas. Orci dignissim
            varius lobortis faucibus. Volutpat vitae pharetra quisque vitae
            eleifend risus, mi. Cum turpis tincidunt phasellus arcu. Viverra
            arcu suscipit ultrices ut integer viverra pellentesque dolor odio.
            Diam sed libero aenean cras blandit pellentesque ornare. A aliquam
            cursus scelerisque pulvinar. Odio in tellus suspendisse libero vitae
            sodales velit dui, accumsan. Volutpat sapien arcu, neque a morbi et
            ac senectus sed. Phasellus vitae mattis turpis viverra risus
            ullamcorper sed id. Morbi id ac etiam metus, adipiscing. Congue
            volutpat tortor enim suspendisse. Aliquet nibh iaculis id volutpat
            eu donec felis at. Magna sit orci massa at praesent faucibus velit
            pellentesque massa. Laoreet ut elit aliquam feugiat quis nisl.
            Tortor nunc, quam non pharetra bibendum urna integer cum est. Ut
            velit in tellus consectetur sit amet. Amet nunc pretium ullamcorper
            magna. Ut diam mattis lorem eu. Nisl vulputate tortor non in
            interdum lectus est etiam eget. Adipiscing commodo vitae porttitor
            nibh odio sit id venenatis elementum. A congue iaculis magna dui,
            enim. Lacinia mauris lacus faucibus amet, a porttitor augue. Magna
            cras mauris aliquet amet, posuere ultricies sagittis faucibus
            ultricies. Ipsum arcu eget odio egestas lectus tellus, erat. Tellus
            proin massa sed parturient et, nunc. Tortor arcu varius purus mattis
            volutpat porttitor massa nibh odio. Purus nulla nunc, ultrices lacus
            id sit. In congue urna sed vitae velit dignissim adipiscing in amet.
            Quam adipiscing ac aliquam id. A, fames sed diam arcu viverra
            sodales egestas tincidunt. Eu suscipit eu consequat sed porttitor
            sit ornare. Molestie netus sed porta lectus. Augue cursus{" "}
          </p>
          <div className="flex items-center justify-end  text-base font-semibold text-[#6C6C6C] space-x-5">
          <div className="flex-col items-center" onClick={()=>{
            handleOpen()
          }}>
          <Link to="">
              <img src={pdf} alt="pdf" className="w-16 h-16" />
              <p className="flex justify-center">Notes PDF</p>
              </Link>
            </div>
            <div className="flex-col items-center">
              <img src={Like} alt="like" className="w-16 h-16" />
              <p className="flex justify-center">Like</p>
            </div>
            <div className="flex-col items-center">
              <Link to="/classstart1">
                {" "}
                <img src={Back} alt="back" className="w-16 h-16" />
                <p className="flex justify-center">Back</p>
              </Link>
            </div>

            <div className="flex-col items-center">
              <Link to="/classstart3">
                {" "}
                <img src={Back} alt="next" className="w-16 h-16 rotate-180" />
                <p className="flex justify-center">Next</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BasicModal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}/>
     
    </div>
  );
};

export default ClassStart2;
