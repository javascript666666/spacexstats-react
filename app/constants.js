export default {
  // Colors used by charts
  COLORS: {
    white: '#FAFAFA',
    yellow: '#ccac55',
    blue: 'steelblue',
    red: 'crimson',
    green: 'mediumseagreen',
  },
  DEFAULTCHARTOPTIONS: {
    title: {
      display: false,
    },
    layout: {
      padding: {
        left: 14,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        fontFamily: 'Brandon',
        fontColor: '#FAFAFA',
      },
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    maintainAspectRatio: false,
  }
};