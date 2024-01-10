import "./ExploreCard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vector from "./vector.png";
import Crousel from "../Crousel/Crousel";
import SectionHeader from "../SectionHeader/SectionHeader";
import spons from "/assets/images/explorePartners1.png";
import register from "/assets/images/exploreRegister1.png";
import speak from "/assets/images/exploreSpeaker1.png";
import time from "/assets/images/exploreProgramme1.png";

const ExploreCard = () => {
  return (
    <div className="exploree">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="Exploreheading"
      >
        {/* <img src={vector} alt="image" className="backii backii1" /> */}
        <SectionHeader text="EXPLORE FESTIVAL" />
        {/* <h1 className="headexp">Explore the Event</h1> */}
      </motion.div>

      <div className="crousel-div">
        <Crousel />
      </div>

      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="page-content"
      >
        <div className="card">
          <Link to="/sponsers">
            <div className="content">
              <h2 className="title">Partners</h2>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/programme">
            <div className="content">
              <h2 className="title">Programme</h2>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/speakers">
            <div className="content">
              <h2 className="title">Speakers</h2>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/register">
            <div className="content">
              <h2 className="title">Register</h2>
            </div>
          </Link>
        </div>
      </motion.main>
    </div>
  );
};

export default ExploreCard;
