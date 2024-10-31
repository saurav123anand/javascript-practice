function main() {
    // Base class Media
    class Media {
        constructor(title, artist, duration) {
            this.title = title;
            this.artist = artist;
            this.duration = duration;
        }

        getTitle() {
            return this.title;
        }

        getArtist() {
            return this.artist;
        }

        getDuration() {
            return this.duration;
        }
    }

    // Class Song extending Media
    class Song extends Media {
        constructor(title, artist, duration, album, genre) {
            super(title, artist, duration);
            this.album = album;
            this.genre = genre;
        }

        getAlbum() {
            return this.album;
        }

        getGenre() {
            return this.genre;
        }
    }

    // Class Podcast extending Media
    class Podcast extends Media {
        constructor(title, artist, duration, host, topic) {
            super(title, artist, duration);
            this.host = host;
            this.topic = topic;
        }

        getHost() {
            return this.host;
        }

        getTopic() {
            return this.topic;
        }
    }

    // Class PopSong extending Song
    class PopSong extends Song {
        constructor(title, artist, duration, album, genre, danceability, energy) {
            super(title, artist, duration, album, genre);
            this.danceability = danceability;
            this.energy = energy;
        }

        getDanceability() {
            return this.danceability;
        }

        getEnergy() {
            return this.energy;
        }
    }

    // Class RockSong extending Song
    class RockSong extends Song {
        constructor(title, artist, duration, album, genre, distortion, tempo) {
            super(title, artist, duration, album, genre);
            this.distortion = distortion;
            this.tempo = tempo;
        }

        getDistortion() {
            return this.distortion;
        }

        getTempo() {
            return this.tempo;
        }
    }

    // Class NewsPodcast extending Podcast
    class NewsPodcast extends Podcast {
        constructor(title, artist, duration, host, topic, source) {
            super(title, artist, duration, host, topic);
            this.source = source;
        }

        getSource() {
            return this.source;
        }

        // Overriding the getDuration method
        getDuration() {
            return this.duration; // Returns the duration of the news podcast
        }
    }

    // Class ComedyPodcast extending Podcast
    class ComedyPodcast extends Podcast {
        constructor(title, artist, duration, host, topic, comedian, rating) {
            super(title, artist, duration, host, topic);
            this.comedian = comedian;
            this.rating = rating;
        }

        getComedian() {
            return this.comedian;
        }

        getRating() {
            return this.rating;
        }
    }

    // Example usage
    const popSong = new PopSong(
        "Shape of You",
        "Ed Sheeran",
        235,
        "÷",
        "Pop",
        0.825,
        0.652
    );
    console.log(popSong.getTitle()); // 'Shape of You'
    console.log(popSong.getArtist()); // 'Ed Sheeran'
    console.log(popSong.getDuration()); // 235
    console.log(popSong.getAlbum()); // '÷'
    console.log(popSong.getGenre()); // 'Pop'
    console.log(popSong.getDanceability()); // 0.825
    console.log(popSong.getEnergy()); // 0.652

    const rockSong = new RockSong(
        "Stairway to Heaven",
        "Led Zeppelin",
        482,
        "Led Zeppelin IV",
        "Rock",
        0.056,
        63.5
    );
    console.log(rockSong.getTitle()); // 'Stairway to Heaven'
    console.log(rockSong.getArtist()); // 'Led Zeppelin'
    console.log(rockSong.getDuration()); // 482
    console.log(rockSong.getAlbum()); // 'Led Zeppelin IV'
    console.log(rockSong.getGenre()); // 'Rock'
    console.log(rockSong.getDistortion()); // 0.056
    console.log(rockSong.getTempo()); // 63.5

    const newsPodcast = new NewsPodcast(
        "The Daily",
        "The New York Times",
        30,
        "Michael Barbaro",
        "News",
        "The New York Times"
    );
    console.log(newsPodcast.getTitle()); // 'The Daily'
    console.log(newsPodcast.getArtist()); // 'The New York Times'
    console.log(newsPodcast.getDuration()); // 30
    console.log(newsPodcast.getHost()); // 'Michael Barbaro'
    console.log(newsPodcast.getTopic()); // 'News'
    console.log(newsPodcast.getSource()); // 'The New York Times'

    const comedyPodcast = new ComedyPodcast(
        "My Favorite Murder",
        "Karen Kilgariff and Georgia Hardstark",
        60,
        "Karen Kilgariff and Georgia Hardstark",
        "Comedy",
        "Karen Kilgariff and Georgia Hardstark",
        4.8
    );
    console.log(comedyPodcast.getTitle()); // 'My Favorite Murder'
    console.log(comedyPodcast.getArtist()); // 'Karen Kilgariff and Georgia Hardstark'
    console.log(comedyPodcast.getDuration()); // 60
    console.log(comedyPodcast.getHost()); // 'Karen Kilgariff and Georgia Hardstark'
    console.log(comedyPodcast.getTopic()); // 'Comedy'
    console.log(comedyPodcast.getComedian()); // 'Karen Kilgariff and Georgia Hardstark'
    console.log(comedyPodcast.getRating()); // 4.8

    return {
        Media,
        Song,
        Podcast,
        PopSong,
        RockSong,
        NewsPodcast,
        ComedyPodcast
    };
}

main();
