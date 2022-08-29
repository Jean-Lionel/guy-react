
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const RightSideTwitter = () => {
    return (


        <TwitterTimelineEmbed

            sourceType="profile"
            screenName="Onpr2018"
            options={{ minHeight: '550px' }}
        />

    );
}

export default RightSideTwitter;