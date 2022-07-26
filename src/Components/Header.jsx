import GuestPic from '../Assets/guest.png'





const Header = () => {
  return (
    <header id="header">
      <div id="button-section-header">
        <button className="button">Home</button>
        <a href='/game'><button className="button">Game</button></a>
        <button className="button">Leaderboard</button>
      </div>
      <div className="profile-pic-header metal linear">
        <img  id='profile-pic' src={GuestPic} alt="Guest" />
       <a href='/login'> <button className='button log-in'>Log in</button></a>
      </div>
    </header>
  );
};

export default Header;
