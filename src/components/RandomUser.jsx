import React from 'react';
import { RandomHookApi } from '../utils/randomHookApi';
import './randomuser.css';

const RandomUser = () => {
  const [users, currentUser, loading, previous, next, currentIndex] =
    RandomHookApi('https://randomuser.me/api');

  if (loading) {
    return <div className="spinner"></div>;
  }
  return (
    <>
      <div>
        {users?.length > 0 &&
          users.map((user, idx) =>
            user?.name === currentUser?.name ? (
              <div className="random_container" key={idx}>
                <div
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    className="random_user_img"
                    src={currentUser?.pic}
                    alt="pic"
                  />
                </div>
                <span className="random_username">{currentUser?.name}</span>
                <button className="btn_action_next" onClick={next}>
                  Go To Next User
                </button>
                <button
                  disabled={currentIndex === 0}
                  className={`btn_action_previous ${
                    currentIndex === 0 && 'btn_action_previous_disabled'
                  }`}
                  onClick={previous}
                >
                  {currentIndex === 0
                    ? 'No Previous User'
                    : 'Back To Previous User'}
                </button>
              </div>
            ) : (
              ''
            ),
          )}
      </div>
    </>
  );
};

export default RandomUser;
