import { connect } from 'react-redux';

import NavigationMenu from '../components/navigation-menu/navigation-menu.jsx';

const mapStateToProps = state => ({
    currentPath: state.router.location.pathname,
    navButtons: [
        { link: '/', glyph: 'home' },
        { link: '/barchart', glyph: 'stats' },
        { link: '/piechart', glyph: 'adjust' },
        { link: '/settings', glyph: 'cog' },
    ],
});

export default connect(mapStateToProps)(NavigationMenu);
