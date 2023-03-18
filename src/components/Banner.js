import { useState, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner=()=>{
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Android Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period=2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = ()=>{
        let i=loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);

        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Vishesh Pawa `}<span className="wrap">{text}</span></h1>
                        <p>
                        Third-year UG student pursuing B.tech in Computer Science Engineering from Maharaja Surajmal Institute of Technology. I am into Full Stack Web and Android Development
                        </p>
                        <a href="https://github.com/visheshpahwa" style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                            <button onClick={()=> console.log('connect')}><span>Github Account</span> <ArrowRightCircle size={25}/></button>
                        </a>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
