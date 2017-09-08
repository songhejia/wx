<template lang='html'>
    <aside class="menu">
        <div class="menu-left">
            <nav class="sidebar">
                <ul class="nav">
                    <li>
                        <a href="#">
                            <em class="icon-rocket"></em>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="active">
                        <a href="#">
                            <em class="icon-paper-plane"></em>
                            <span>News</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <em class="icon-bubbles"></em>
                            <span>Messages</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <em class="icon-star"></em>
                            <span>Favorites</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <em class="icon-camera"></em>
                            <span>Gallery</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <em class="fa fa-users"></em>
                            <span>Community</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <em class="icon-map"></em>
                            <span>Map</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <em class="icon-music-tone-alt"></em>
                            <span>Music</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <em class="icon-settings"></em>
                            <span>Settings</span>
                        </a>
                    </li>
                    <hr />
                    <li class="lock">
                        <a href="#lock" class="">
                            <em class="icon-lock-open"></em>
                            <span>Lock</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<<script>
export default {
  name:"nav-a"
}
</script>


<style lang="scss">
@import './css/menu2.css';
@import './css/font-awesome.min.css';
@import './css/simple-line-icons.css';
@import './css/animate.min.css';
</style>