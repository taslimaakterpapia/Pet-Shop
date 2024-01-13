import styled, { keyframes, css } from "styled-components";


import b from "../../../assets/b.jpg"
import c from "../../../assets/c.jpg"
import d from "../../../assets/d.jpg"
import e from "../../../assets/e.jpg"
import f from "../../../assets/f.jpg"
import h from "../../../assets/h.jpg"



const Brand = () => {


    const row1 = [ b, c, d, e, f, h ];


    return (

       <div>
         <h1 className="text-3xl text-orange-400 font-bold text-center my-5 underline underline-offset-4">Brands we stock</h1>
              
              <p className="text-gray-400 pb-5 text-center">Our customers have gotten offers from awesome companies.</p>
         <Container>
           
            <Wrapper>            
                <Marquee>
                    <MarqueeGroup>
                        {row1.map((el, index) => (
                            <ImageGroup key={index}> 
                                <Image src={el} />
                             
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    
                </Marquee>
            </Wrapper>
        </Container>
       </div>
    );
}


export default Brand;


const Container = styled.div`

  
 
  margin-bottom: 40px;


  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
 
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Marquee = styled.div`
  display: flex;
  width: 100%; 
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
       width: 1200px;
  }
`;


const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: space-around;
white-space: nowrap;
width: 100%;
animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  border-radius: 0.5rem;

 
`;

