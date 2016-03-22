import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import FriendItem from './friendItem';
import { toggleAddFriend } from './friendActions';
import List from 'material-ui/lib/lists/list';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import { Link } from 'react-router';

const mapStateToProps = state => ({ friends: state.friend.get('friends') });

const mapDispatchToProps = dispatch => ({
  onFriendClick: id => dispatch(toggleAddFriend(id)),
});

let FriendList = ({ friends, onFriendClick }) => (
  <div>
    <List>
      {friends.map(friend =>
        <FriendItem key={ friend.id } {...friend} onClick={() => onFriendClick(friend.id)} />
      )}
    </List>
    <Link to="tag"><NavigationArrowForward /></Link>
  </div>
);

FriendList.propTypes = {
  friends: React.PropTypes.object.isRequired,
  onFriendClick: React.PropTypes.func.isRequired,
};

FriendList = connect(mapStateToProps, mapDispatchToProps)(FriendList);

export default FriendList;
