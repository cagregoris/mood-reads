INSERT INTO
books(title, author, year, description, category, mood)
VALUES
  (
    'Life of Pi',
    'Yann Martel',
    '2001',
    'Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.',
    ARRAY['pleasant-calm', 'pleasant-energized'],
    ARRAY['whimsical', 'adventurous']
  ),
  (
    'The Help',
    'Kathryn Stockett',
    '2009',
    'Aibileen is a black maid in 1962 Jackson, Mississippi, who’s always taken orders quietly, but lately she’s unable to hold her bitterness back. Her friend Minny has never held her tongue but now must somehow keep secrets about her employer that leave her speechless. White socialite Skeeter just graduated college. She’s full of ambition, but without a husband, she’s considered a failure.
    Together, these seemingly different women join together to write a tell-all book about work as a black maid in the South, that could forever alter their destinies and the life of a small town.',
    ARRAY['pleasant-calm', 'unpleasant-calm'],
    ARRAY['reflective', 'hopeful']
  ),
  (
    'The Kite Runner',
    'Khaled Hosseini',
    '2003',
    'The story of the unlikely friendship between a wealthy boy and the son of his father’s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed. It is about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies.',
    ARRAY['unpleasant-calm'],
    ARRAY['sad']
  ),
  (
    'The Curious Incident of the Dog in the Night-Time',
    'Mark Haddon',
    '2003',
    'Christopher John Francis Boone knows all the countries of the world and their capitals and every prime number up to 7,057. Although gifted with a superbly logical brain, Christopher is autistic. Everyday interactions and admonishments have little meaning for him. At fifteen, Christopher’s carefully constructed world falls apart when he finds his neighbour’s dog Wellington impaled on a garden fork, and he is initially blamed for the killing.
    Christopher decides that he will track down the real killer, and turns to his favourite fictional character, the impeccably logical Sherlock Holmes, for inspiration. But the investigation leads him down some unexpected paths and ultimately brings him face to face with the dissolution of his parents’ marriage. As Christopher tries to deal with the crisis within his own family, the narrative draws readers into the workings of Christopher’s mind.',
    ARRAY['unpleasant-calm', 'pleasant-calm'],
    ARRAY['ominous', 'whimsical']
  ),
  (
    'The Book Thief',
    'Markus Zusak',
    '2005',
    'It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still.
    Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement.',
    ARRAY['unpleasant-calm'],
    ARRAY['sad']
  ),
  (
    'Gone Girl',
    'Gillian Flynn',
    '2012',
    'On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. Husband-of-the-Year Nick isn’t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife’s head, but passages from Amy''s diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amy’s fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he’s definitely bitter—but is he really a killer?',
    ARRAY['unpleasant-energized'],
    ARRAY['fearful', 'angry', 'ominous']
  ),
  (
    'The Light Between Oceans',
    'M.L Stedman',
    '2013',
    'After four harrowing years on the Western Front, Tom Sherbourne returns to Australia and takes a job as the lighthouse keeper on Janus Rock, nearly half a day’s journey from the coast. To this isolated island, where the supply boat comes once a season, Tom brings a young, bold, and loving wife, Isabel. Years later, after two miscarriages and one stillbirth, the grieving Isabel hears a baby’s cries on the wind. A boat has washed up onshore carrying a dead man and a living baby. Tom, who keeps meticulous records and whose moral principles have withstood a horrific war, wants to report the man and infant immediately. But Isabel insists the baby is a “gift from God,” and against Tom’s judgment, they claim her as their own and name her Lucy. When she is two, Tom and Isabel return to the mainland and are reminded that there are other people in the world. Their choice has devastated one of them.',
    ARRAY['unpleasant-calm', 'unpleasant-energized'],
    ARRAY['sad', 'fearful']
  ),
  (
    'Water for Elephants',
    'Sara Gruen',
    '2015',
    'Orphaned and penniless at the height of the Depression, Jacob Jankowski escapes everything he knows by jumping on a passing train-and inadvertently runs away with the circus. So begins Water for Elephants, Sara Gruen''s darkly beautiful tale about the characters who inhabit the less-than-greatest show on earth.
    Jacob finds a place tending the circus animals, including a seemingly untrainable elephant named Rosie. He also comes to know Marlena, the star of the equestrian act-and wife of August, a charismatic but cruel animal trainer. Caught between his love for Marlena and his need to belong in the crazy family of travelling performers, Jacob is freed only by a murderous secret that will bring the big top down.',
    ARRAY['pleasant-energized', 'pleasant-calm'],
    ARRAY['adventurous', 'whimsical', 'romantic', 'hopeful']
  ),
  (
    'Marley and Me',
    'John Grogan',
    '2008',
    'Is it possible for humans to discover the key to happiness through a bigger-than-life, bad-boy dog? Just ask the Grogans.
    John and Jenny were just beginning their life together. They were young and in love, with not a care in the world. Then they brought home Marley, a wiggly yellow furball of a puppy. Life would never be the same.
    Marley grew into a barreling, ninety-seven-pound streamroller of a Labrador retriever. He crashed through screen doors, gouged through drywall, and stole women''s undergarments. Obedience school did no good -- Marley was expelled.
    But just as Marley joyfully refused any limits on his behavior, his love and loyalty were boundless, too. Marley remained a model of devotion, even when his family was at its wit''s end. Unconditional love, they would learn, comes in many forms.
    Marley & Me is John Grogan''s funny, unforgettable tribute to this wonderful, wildly neurotic Lab and the meaning he brought to their lives.',
    ARRAY['pleasant-energized', 'pleasant-calm'],
    ARRAY['adventurous', 'cheerful', 'humorous', 'idylic', 'reflective']
  ),
  (
    'The Girl on the Train',
    'Paula Hawkins',
    '2015',
    'Rachel takes the same commuter train every morning and night. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She''s even started to feel like she knows them. Jess and Jason, she calls them. Their life--as she sees it--is perfect. Not unlike the life she recently lost.
    And then she sees something shocking. It''s only a minute until the train moves on, but it''s enough. Now everything''s changed. Unable to keep it to herself, Rachel goes to the police. But is she really as unreliable as they say? Soon she is deeply entangled not only in the investigation but in the lives of everyone involved. Has she done more harm than good?',
    ARRAY['unpleasant-energized'],
    ARRAY['fearful', 'ominous']
  ),
  (
    'All the Light We Cannot See',
    'Anthony Doer',
    '2015',
    'Marie-Laure lives in Paris near the Museum of Natural History, where her father works. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo, where Marie-Laure’s reclusive great uncle lives in a tall house by the sea. With them they carry what might be the museum’s most valuable and dangerous jewel.
    In a mining town in Germany, Werner Pfennig, an orphan, grows up with his younger sister, enchanted by a crude radio they find that brings them news and stories from places they have never seen or imagined. Werner becomes an expert at building and fixing these crucial new instruments and is enlisted to use his talent to track down the resistance. Deftly interweaving the lives of Marie-Laure and Werner, Doerr illuminates the ways, against all odds, people try to be good to one another. ',
    ARRAY['unpleasant-calm'],
    ARRAY['sad', 'reflective']
  ),
  (
    'The Whistling Season',
    'Ivan Doig',
    '2007',
    '"Can''t cook but doesn''t bite." So begins the newspaper ad offering the services of an "A-1 housekeeper, sound morals, exceptional disposition" that draws the attention of widower Oliver Milliron in the fall of 1909. That unforgettable season deposits the ever-whistling Rose Llewellyn and her font-of-knowledge brother, Morris Morgan, in Marias Coulee along with a stampede of homesteaders drawn by the promise of the Big Ditch—a gargantuan irrigation project intended to make the Montana prairie bloom.
    When the schoolmarm runs off with an itinerant preacher, Morris is pressed into service, setting the stage for the "several kinds of education"—none of them of the textbook variety—Morris and Rose will bring to Oliver, his three sons, and the rambunctious students in the region''s one-room schoolhouse.',
    ARRAY['pleasant-calm', 'pleasant-energized'],
    ARRAY['idylic', 'reflective', 'whimsical']
  )