import React from 'react';
import Talk from 'talkjs';

export default function Messages() {

  function handleClick(userId) {

    /* Retrieve the two users that will participate in the conversation */
    const { currentUser } = this.state;
    const user = dummyUsers.find(user => user.id === userId)

    /* Session initialization code */
    Talk.ready
    .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const other = new Talk.User(user)

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
            window.talkSession = new Talk.Session({
                appId: trxhdliV,
                me: me
            });
        } 
        
        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(conversationId);
        
        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        /* Create and mount chatbox in container */
        this.chatbox = window.talkSession.createChatbox(conversation);
        this.chatbox.mount(this.container);
    })            
    .catch(e => console.error(e));
}

  return (
    <div className="users">
                <div className="current-user-container">
                    {currentUser &&
                        <div>
                            <picture className="current-user-picture">
                                <img alt={currentUser.name} src={currentUser.photoUrl} />
                            </picture>
                            <div className="current-user-info">
                                <h3>{currentUser.name}</h3>
                                <p>{currentUser.description}</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="users-container"> 
                    <ul>
                        { dummyUsers.map(user => 
                          <li key={user.id} className="user">
                              <picture className="user-picture">
                                  <img src={user.photoUrl} alt={`${user.name}`} />
                              </picture>
                              <div className="user-info-container">
                                  <div className="user-info">
                                      <h4>{user.name}</h4>
                                      <p>{user.info}</p>
                                  </div>
                                  <div className="user-action">
                                      <button >Message</button>
                                  </div>
                              </div>
                          </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
