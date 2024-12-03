import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function App(): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./image/kanye-west-life-of-pablo-art-2016-billboard-650.png')}
        style={styles.albumCover}
      />
      <Text style={styles.title}>Follow God</Text>
      <Text style={styles.artist}>Kanye West</Text>
      <Text style={styles.lyrics}>
        Father I stretch
        {'\n'}
        Stretch my hands to you
        Lifelike, this is what your life like, try to live your life right
        People really know you, push your buttons like typewrite
        This is like a movie, but it's really very lifelike
        Every single night, right, every single fight, right?
        I was looking at the 'Gram and I don't even like likes
        I was screaming at my Dad, he told me, "It ain't Christ-like"
        I was screaming at the referee just like Mike
        Looking for a bright light, Sigel, "What Your Lifelike"
        {'\n'}{'\n'}
        Riding on a white bike, feeling like Excitebike (stretch my hands to you)
        Pressing on the gas, supernova for a night light
        Screaming at my Dad, and he told me, "It ain't Christ-like"
        But nobody never tell you when you're being like Christ
        Only ever seein' me only when they needin' me
        Like if Tyler Perry made a movie for BET
        Searching for a deity, now you wanna see it free
        Now you wanna see if we, let's just see if three apiece
        Tell me what your life like, turn it down, a bright light
        {'\n'}{'\n'}
        Driving with my Dad, and he told me, "It ain't Christ-like" (stretch my hands to you)
        I'm just tryna find, l've been looking for a new way
        I'm just really tryna not to really do the fool way
        I don't have a cool way, being on my best, though
        Block 'em on the text though, nothin' else next though
        Not another word, letter, picture, or a decimal (Father I stretch)
        Wrestlin' with God, I don't really want to wrestle
        Man, it's really lifelike, everything in my life (stretch my hands to you)
        Arguing with my Dad, and he said, "It ain't Christ-like"
        {'\n'}{'\n'}
        Man
        {'\n'}{'\n'}
        You know, it's like
        Somebody only close who can get you, like, off your
        I be on my
        I woke up this morning, I said my prayers
        I'm all good, then I tried to talk to my Dad (stretch my hands to you)
        Give him some advice, he starts spazzin' on me
        I start spazzin' back, he said "That ain't Christ-like"
        I said, "Ahhh"
        SWISH
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FDB44E',
    paddingTop: 40,
  },
  albumCover: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  artist: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#808080',
    marginBottom: 20,
  },
  lyrics: {
    fontSize: 16,
    color: '#000000',
    paddingHorizontal: 20,
    lineHeight: 24,
    textAlign: 'justify'
  },
});

export default App;
