//feature
class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);
    if (idx === -1) {
      throw new Error('Friend not found!');
    }
    this.friends.splice(idx, 1);
  }
}

//tests
describe('FriendsList', () => {
  let friendsList;
  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', () => {
    friendsList.addFriend('Sam');

    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();

    expect(friendsList.announceFriendship).not.toHaveBeenCalledTimes(1);
    friendsList.addFriend('Sam');
    expect(friendsList.announceFriendship).toHaveBeenCalledTimes(1);
  });

  describe('remove friend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('Sam');
      expect(friendsList.friends[0]).toEqual('Sam');
      friendsList.removeFriend('Sam');
      expect(friendsList.friends[0]).toBeUndefined;
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendsList.removeFriend('Sam')).toThrow(
        new Error('Friend not found!'),
      );
    });
  });
});
