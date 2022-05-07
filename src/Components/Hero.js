const Hero = () => {
  return (
    <>
      <div className="section1">
        <div className="hero">Lorem Ipsum Lorem Ipsum, Lorem Lorem!</div>
        <div className="blocks" />
        <div className="tiles" />
      </div>
      <div className="section2">
        <div className="aboutxcash">
          <h2>About</h2>
          <img src="\images\xcash_dark.png" alt="xCash" />
        </div>
        <p className="p1">
          The X-Cash Foundation is an open-source, no-ICO blockchain project
          launched in 2018 developing a privacy centered cryptocurrency
          inheriting from Monero and bringing new innovation in the privacy coin
          space.
        </p>
        <p className="p2">X-Cash main features are:</p>
        <ul className="features">
          <li className="feature">
            <span>
              FlexPrivacy - Private and public transactions on the same
              blockchain
            </span>
            Private by default, X-Cash's FlexPrivacy lets the user decide if
            he/she wants the transaction to be made public.
          </li>
          <li className="feature">
            <span>
              Delegated-Proof-of-Private-Stake - X-Cash custom consensus
              designed for privacy coins
            </span>
            X-Cash consensus model gets rid of the decentralized yet
            unsustainable PoW consensus to propose its own variation of a DPoS
            with DBFT consensus.
          </li>
          <li className="feature">
            <span>Sidechains - The next step in blockchain hosting</span>
            X-Cash will make it easy to create and host your own blockchain,
            while being able to profit from X-Cash's unique features.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
