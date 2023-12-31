export const AudioProfileList = {
  Default: 0,
  SpeechStandard: 1,
  MusicStandard: 2,
  MusicStandardStereo: 3,
  MusicHigh: 4,
  MusicHighStereo: 5,
  IOT: 6,
};
export const AudioScenarioList = {
  Standard: 0,
  Entertainment: 1,
  Education: 2,
  HighQuality: 3,
  Showroom: 4,
  Gaming: 5,
  Meeting: 8,
};

export const RoleTypeMap = {
  Broadcaster: 1,
  Audience: 2,
};
export const ResolutionMap = {
  '120x120': { width: 120, height: 120 },
  '160x120': { width: 160, height: 120 },
  '180x180': { width: 180, height: 180 },
  '240x180': { width: 240, height: 180 },
  '240x240': { width: 240, height: 240 },
  '320x180': { width: 320, height: 180 },
  '320x240': { width: 320, height: 240 },
  '360x360': { width: 360, height: 360 },
  '424x240': { width: 424, height: 240 },
  '480x360': { width: 480, height: 360 },
  '480x480': { width: 480, height: 480 },
  '640x360': { width: 640, height: 360 },
  '640x480': { width: 640, height: 480 },
  '848x480': { width: 848, height: 480 },
  '960x720': { width: 960, height: 720 },
  '1280x720': { width: 1280, height: 720 },
  '1920x1080': { width: 1920, height: 1080 },
};
export const FpsMap = {
  '15fps': 15,
  '30fps': 30,
};
export const EncryptionMap = {
  AES_128_XTS: 1,
  AES_128_ECB: 2,
  AES_256_XTS: 3,
  SM4_128_ECB: 4,
  AES_128_GCM: 5,
  AES_256_GCM: 6,
  AES_128_GCM2: 7,
  AES_256_GCM2: 8,
};
export const VoiceBeautifierMap = {
  VOICE_BEAUTIFIER_OFF: 0,

  CHAT_BEAUTIFIER_MAGNETIC: 16843008,

  CHAT_BEAUTIFIER_FRESH: 16843264,

  CHAT_BEAUTIFIER_VITALITY: 16843520,

  SINGING_BEAUTIFIER: 16908544,

  TIMBRE_TRANSFORMATION_VIGOROUS: 16974080,

  TIMBRE_TRANSFORMATION_DEEP: 16974336,

  TIMBRE_TRANSFORMATION_MELLOW: 16974592,

  TIMBRE_TRANSFORMATION_FALSETTO: 16974848,

  TIMBRE_TRANSFORMATION_FULL: 16975104,

  TIMBRE_TRANSFORMATION_CLEAR: 16975360,

  TIMBRE_TRANSFORMATION_RESOUNDING: 16975616,

  TIMBRE_TRANSFORMATION_RINGING: 16975872,
};

export const AudioEffectMap = {
  AUDIO_EFFECT_OFF: 0,

  ROOM_ACOUSTICS_KTV: 33620224,

  ROOM_ACOUSTICS_VOCAL_CONCERT: 33620480,

  ROOM_ACOUSTICS_STUDIO: 33620736,

  ROOM_ACOUSTICS_PHONOGRAPH: 33620992,

  ROOM_ACOUSTICS_VIRTUAL_STEREO: 33621248,

  ROOM_ACOUSTICS_SPACIAL: 33621504,

  ROOM_ACOUSTICS_ETHEREAL: 33621760,

  ROOM_ACOUSTICS_3D_VOICE: 33622016,

  VOICE_CHANGER_EFFECT_UNCLE: 33685760,

  VOICE_CHANGER_EFFECT_OLDMAN: 33686016,

  VOICE_CHANGER_EFFECT_BOY: 33686272,

  VOICE_CHANGER_EFFECT_SISTER: 33686528,

  VOICE_CHANGER_EFFECT_GIRL: 33686784,

  VOICE_CHANGER_EFFECT_PIGKING: 33687040,

  VOICE_CHANGER_EFFECT_HULK: 33687296,

  STYLE_TRANSFORMATION_RNB: 33751296,

  STYLE_TRANSFORMATION_POPULAR: 33751552,

  PITCH_CORRECTION: 33816832,
};
export const EqualizationReverbMap = {
  'Dry Level': {
    min: -20,
    max: 0,
    defaultValue: 0,
    audioReverbType: 0,
    title: 'Dry Level',
  },
  'Wet Level': {
    min: -20,
    max: 0,
    defaultValue: 0,
    audioReverbType: 1,
    title: 'Wet Level',
  },
  'Room Size': {
    min: 0,
    max: 100,
    defaultValue: 0,
    audioReverbType: 2,
    title: 'Room Size',
  },
  'Wet Delay': {
    min: 0,
    max: 200,
    defaultValue: 0,
    audioReverbType: 3,
    title: 'Wet Delay',
  },
  Strength: {
    min: 0,
    max: 100,
    defaultValue: 0,
    audioReverbType: 4,
    title: 'Strength',
  },
};
export default {};
