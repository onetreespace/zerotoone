import { Theme } from '@rainbow-me/rainbowkit';

export const rainbowkitTheme: Theme = {
  blurs: {
    modalOverlay: 'blur(4px)',
  },
  colors: {
    accentColor: 'white',
    accentColorForeground: 'black',
    actionButtonBorder: '1px solid black',
    actionButtonBorderMobile: '1px solid black',
    actionButtonSecondaryBackground: '#99E1FF',
    closeButton: 'black',
    closeButtonBackground: 'white',
    connectButtonBackground: 'white',
    connectButtonBackgroundError: '#FF494A',
    connectButtonInnerBackground: 'white',
    connectButtonText: 'black',
    connectButtonTextError: 'black',
    connectionIndicator: '#30E000',
    downloadBottomCardBackground:
      'linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF',
    downloadTopCardBackground:
      'linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF',
    error: '#FF494A',
    generalBorder: '1px solid black',
    generalBorderDim: '1px solid black',
    menuItemBackground: 'rgba(0, 0, 0, 0.25)',
    modalBackdrop: 'rgba(0, 0, 0, 0.5)',
    modalBackground: '#bcd590',
    modalBorder: 'black',
    modalText: 'black',
    modalTextDim: 'black',
    modalTextSecondary: '#495338',
    profileAction: '#E9E7BD',
    profileActionHover: 'white',
    profileForeground: '#E9E7BD',
    selectedOptionBorder: '1px solid black',
    standby: '#FFD641',
  },
  fonts: {
    body: `"Dela Gothic One", sans-serif`,
  },
  radii: {
    actionButton: '5px',
    connectButton: '5px',
    menuButton: '5px',
    modal: '5px',
    modalMobile: '5px',
  },
  shadows: {
    connectButton: '5px 5px 0px 0px #000000',
    dialog: 'none',
    profileDetailsAction: '',
    selectedOption: '',
    selectedWallet: '',
    walletLogo: '',
  },
};
