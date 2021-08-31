
class Song
    def initialize(name, artist, duration)
      @name     = name
      @artist   = artist
      @duration = duration
    end
  end


class KaraokeSong < Song
    def initialize(name, artist, duration, lyrics)
      super(name, artist, duration)
      @lyrics = lyrics
    end
  end


aSong = KaraokeSong.new("my way", "frank", 225, "And now, the...")

 aSong.to_s