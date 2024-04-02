import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { LiveIcon } from '../../libs/Icons';
import React, { useState } from 'react';



export default function NavBar() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (

    <nav className="flex 
    flex-col w-64 bg-bg-secondary  gap-4 py-2 shadow-dark-mild p-6">
      <svg className="w-48" width="351" height="140" viewBox="0 0 351 140" fill="none" >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M293.55 106C296.656 106 299 108.17 299 111.046C299 113.916 296.706 116 293.55 116C290.335 116 288 113.916 288 111.046C288 108.121 290.335 106 293.55 106ZM19.7077 11.5495C21.2901 10.8275 24.6249 10.9656 26.4196 11.1376C27.799 11.2686 29.8999 11.835 30.5661 12.9009C30.9215 13.4731 30.545 15.1896 30.4629 15.7653L30.1628 17.7169C29.794 20.0319 29.2323 23.3673 28.5936 27.0947L24.0735 53.146C23.6877 55.525 22.1142 65.5582 21.7476 67.8091L22.1994 66.3729C25.4095 56.3001 31.0893 41.1353 37.0539 33.1191C39.3061 30.0944 42.574 26.4542 46.3769 24.554C48.3972 23.5435 49.9675 23.1487 52.323 23.8482L52.7368 23.9771V23.9771C53.2084 24.1596 53.6647 24.3562 54.1104 24.5376C55.823 25.2373 58.2381 27.106 58.8633 28.3884C59.3173 29.321 58.7003 30.972 58.6123 31.5453L58.5114 32.1542C57.5085 37.9175 53.2502 56.0194 52.0201 62.3822C55.43 52.8038 60.8316 39.6108 67.5787 31.2458C69.927 28.3357 73.1856 24.7587 77.013 22.9802C79.0261 22.0486 81.053 21.6295 83.6531 22.5348L84.0474 22.6806C84.1026 22.697 84.1565 22.7181 84.2023 22.738C86.3231 23.6401 88.3723 25.0606 89.0385 25.861C90.3053 27.3775 90.0137 29.8394 89.8504 30.709L87.1103 43.8266C86.1859 48.3005 85.2749 52.8207 84.6282 56.359L84.4838 57.1577C82.268 69.5643 80.5977 85.1033 80.2317 92.1484C79.8505 99.4873 80.8968 106.612 84.8087 112.949C86.004 114.887 79.9854 115.29 78.3326 114.824C69.9293 112.459 65.6855 105.145 65.7981 95.9489C65.9237 85.815 69.9067 64.272 72.5964 50.6098L74.6969 40.0778C74.8937 39.0705 75.1066 37.9606 75.3802 36.5077C63.099 48.3211 53.0207 74.3769 50.2477 85.5479C49.6589 87.9244 43.2497 90.2646 41.5676 90.6297C41.4378 90.6577 41.3262 90.6754 41.226 90.6813L40.89 90.6806C37.7562 90.5135 38.2464 82.5485 38.9219 76.2591L39.4799 71.4314C40.1228 66.3798 42.9305 48.1834 44.8367 38.174C31.3028 51.8185 21.71 85.0997 18.7858 97.4607C18.2204 99.8501 11.8909 102.409 10.2218 102.836C10.1099 102.864 10.0096 102.884 9.91931 102.894L9.79129 102.902C5.36328 103.404 6.2874 94.1866 6.91938 89.7465L7.38489 86.6114C8.66123 77.5788 13.7117 39.2763 15.6081 27.0322C11.5918 31.4424 6.84708 38.174 3.66593 43.1352C1.19561 46.993 -0.85243 40.7599 0.358096 38.4548L1.20191 36.8715C2.49565 34.4766 3.85553 32.1138 6.20186 28.1512L7.52038 25.93C9.37253 22.8082 15.5577 14.0862 19.2902 11.7776L19.4261 11.6941V11.6941L19.5717 11.615C19.5822 11.6103 19.594 11.6021 19.601 11.5963L19.7077 11.5495ZM328.432 81L335.253 97.9905L341.9 81H351V82.9875L337.6 114H332.874L323.003 91.3884L327.849 89.5255H315.537V114H305.999V89.5255H298V81H328.432ZM152.492 1.16655L153.256 1.09516C156.829 0.797682 158.65 1.19167 158.454 2.3613L153.887 25.7296C152.228 34.2986 150.592 42.9134 149.9 47.1049L149.721 48.2252C149.134 51.9602 147.682 58.5605 147.471 63.6035L147.427 65.2881C147.379 68.0992 147.512 72.9413 150.532 73.1779C152.209 73.3126 154.516 71.6842 155.903 70.3842C156.266 70.0463 156.614 69.6929 156.954 69.3289C156.33 65.9078 156.266 62.0458 156.64 58.8161C157.277 53.2984 158.811 47.9936 160.989 42.6012C163.044 37.5185 167.171 31.4703 171.865 27.8813C174.391 25.9515 177.455 24.739 180.494 24.18C185.723 23.2204 187.258 25.1987 187.227 28.4296C188.529 27.8813 193.871 27.5728 196.18 32.8612C196.848 34.3987 197.538 36.5896 197.601 40.116C196.635 41.1051 195.644 41.865 194.658 42.4429C199.697 41.4926 205.909 37.0374 208.753 25.1569L208.897 24.5357C209.029 23.9484 209.265 22.8706 209.533 21.6369L208.52 21.8V21.8C202.958 22.7903 198.195 23.9614 192.59 25.968C190.174 26.8331 192.105 20.0829 194.825 19.1245C197.739 17.8683 200.857 16.9217 205.593 15.7825C207.334 15.3641 209.173 14.96 211.088 14.5783L211.528 12.7448C212.114 10.3488 212.701 8.09234 213.377 5.31096C214.068 2.47523 216.754 1.78218 220.77 1.63098L221.163 1.61798C225.275 1.49981 227.375 2.01623 227.132 3.24998L226.979 3.91657C226.665 5.23306 225.931 8.15544 224.934 12.4098C231.375 11.657 238.153 11.2044 244.801 11.2091C264.866 11.1276 280.444 14.895 285.682 22.7513C288.723 27.3117 288.987 34.5298 288.631 39.3951C287.614 54.1162 282.955 69.5818 279.273 79.96C283.13 78.0432 288.299 73.3245 293.016 67.509C299.979 58.9047 304.858 47.8139 305.49 38.8007C305.865 33.2228 319.978 32.2018 320 35.89C320.016 39.1399 316.564 48.8361 311.297 57.5433C301.661 73.3256 284.756 88.4344 280.179 89.7071C278.242 90.2247 276.231 90.1952 273.316 88.4627C271.157 87.1368 269.408 85.61 268.653 84.6858C267.157 82.8529 267.351 80.5414 267.392 79.8182C267.512 77.7142 273.35 66.1143 275.692 50.0568L275.795 49.3348C276.806 42.0103 277.115 29.6031 268.024 25.7435C264.334 24.3171 260.804 23.2984 257.85 22.6662L256.853 22.4577C249.183 20.8893 237.199 19.261 223.047 20.0983L222.319 22.9123C219.372 34.453 217.504 43.5959 216.855 47.0195L216.783 47.4027C216.09 51.1 214.45 57.8489 214.11 62.8892L214.035 64.3365C213.907 67.1014 213.833 72.1799 216.947 72.6532C218.633 72.9061 220.989 71.4526 222.426 70.2543C222.918 69.8466 223.387 69.4093 223.843 68.9496C223.41 65.8569 223.41 62.509 223.754 59.661C224.416 54.1836 225.967 48.9224 228.17 43.575C230.244 38.5313 234.399 32.5409 239.104 28.9921C241.637 27.0848 244.706 25.89 247.751 25.3476C252.983 24.4128 254.506 26.3816 254.467 29.5913C255.769 29.0489 261.113 28.7641 263.396 34.0252C264.087 35.61 264.791 37.8978 264.797 41.6381C263.876 42.5693 262.929 43.2973 261.986 43.8645C265.345 43.0455 268.51 40.6268 271.087 35.1129L271.319 34.6031C272.568 31.8 273.115 37.3708 272.294 39.5546C270.622 43.9969 268.048 46.9335 264.163 48.5655C263.96 49.8087 263.704 51.1406 263.378 52.5859C261.77 59.6988 259.592 65.4339 255.44 71.0697C250.612 77.6201 245.632 80.7849 240.286 81.8154C232.72 83.276 227.324 79.765 225.103 74.069C224.468 74.7674 223.83 75.4126 223.197 75.9846C219.565 79.258 215.928 81.4904 211.118 80.4823C207.735 79.7756 204.797 77.6733 203.23 73.7877C201.869 70.4008 201.401 66.1618 201.98 60.1609L202.06 59.4044C202.513 55.3836 203.616 49.6063 205.416 41.1926C203.106 44.1907 200.14 46.2008 197.019 47.4003C196.818 48.679 196.559 50.0534 196.232 51.5483C194.656 58.7168 192.501 64.4991 188.371 70.1857C183.569 76.7976 178.599 80.0037 173.259 81.0614C166.135 82.4748 160.921 79.4318 158.464 74.2805C157.917 74.9281 157.367 75.5272 156.818 76.0555C152.972 79.7461 149.755 82.0848 144.956 81.4266C141.585 80.9692 138.615 79.0831 136.965 75.3133C135.526 72.0269 134.952 67.8246 135.371 61.7846L135.46 60.6603C135.817 56.4714 136.644 50.2234 138.143 41.3852C136.044 44.4802 133.363 46.5884 130.489 47.8837C130.296 49.1848 130.048 50.5887 129.726 52.1179C128.212 59.297 126.106 65.0983 122.027 70.818C117.283 77.4689 112.341 80.7104 107.01 81.8118C99.4435 83.3717 93.9954 79.8749 91.7086 74.1399C90.0988 70.0994 89.7083 64.2651 90.197 59.6941C90.7885 54.1753 92.2745 48.8562 94.4058 43.4497C96.4178 38.3469 100.493 32.268 105.157 28.6435C107.662 26.6948 110.717 25.4563 113.753 24.8737C118.973 23.8728 120.523 25.8416 120.523 29.0701C121.819 28.5123 127.158 28.1602 129.512 33.4332L129.711 33.8999C130.342 35.4409 130.94 37.6009 131.004 40.9208C130.213 41.7173 129.407 42.3625 128.6 42.8837C132.783 41.592 137.622 37.4913 140.534 28.1602L141.365 23.6901C142.359 18.2506 143.385 12.4577 144.87 5.42796C145.502 2.45112 148.298 1.59907 152.492 1.16655ZM250.427 37.0108C249 36.8722 245.566 38.071 243.374 40.6534C240.614 43.9047 239.06 46.8121 237.42 51.7474L237.214 52.375C233.906 62.617 234.358 70.484 238.213 73.3578C240.716 75.2247 244.795 72.9444 248.562 67.5165C251.306 63.5624 253.404 57.932 254.471 51.8325C257.01 51.6749 259.626 51.0056 262 49.7653C259.026 50.6633 255.918 50.8623 253.214 50.4429C250.293 49.988 252.791 42.0678 254.938 43.4337C254.48 40.9703 253.249 39.9452 251.783 39.5777L251.582 39.5316C250.198 39.2425 249.543 38.3731 250.427 37.0108ZM117.264 36.0082C115.815 35.8862 112.354 37.1249 110.169 39.7232C107.304 43.1308 105.76 46.1525 104.087 51.478C100.871 61.7231 101.429 69.5612 105.369 72.3812C107.925 74.2146 112.025 71.8979 115.766 66.4422C118.529 62.4187 120.594 56.6909 121.583 50.5067C124.085 50.3812 126.629 49.7419 129 48.4797C126.11 49.3525 123.132 49.5096 120.419 49.1073C117.001 48.6041 120.09 41.8017 121.81 41.9355C121.263 39.7961 120.071 38.8867 118.676 38.5557L118.465 38.5103C117.059 38.2369 116.385 37.3771 117.264 36.0082ZM183.167 35.01C181.751 34.876 178.354 36.0902 176.196 38.6762C173.361 42.0709 171.826 45.0835 170.145 50.4083C166.91 60.6511 167.388 68.5101 171.216 71.3653C173.702 73.2213 177.73 70.9304 181.441 65.4939C184.189 61.4645 186.265 55.706 187.28 49.4891C189.541 49.3657 191.836 48.8073 194 47.7201C191.32 48.3607 188.63 48.4524 186.229 48.1009C183.534 47.7083 185.678 40.2724 187.546 40.9001C187.02 38.8142 185.874 37.9121 184.534 37.5752L184.321 37.5266C182.946 37.2422 182.296 36.3747 183.167 35.01Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M276.103 97.5439C284.476 102.488 280.142 111.545 277.478 115C266.57 102.976 222.209 90.3338 139.44 94.0111C121.061 94.817 101.07 97.1105 84.3813 100.089L84.2418 99.1051C84.0992 97.9878 83.9152 96.1611 84.043 94.9316C101.994 91.4382 118.274 89.1232 136.207 87.5496C194.662 82.417 254.308 84.6855 276.103 97.5439Z" fill="#FFC107"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M63.2744 99L63.2976 99.489C63.3579 100.57 63.4973 101.817 64 103.708C54.0826 105.778 43.5259 108.251 33.3111 110.921L30.5345 111.653C26.0033 112.863 21.0682 110.649 26.1513 108.982C36.6955 105.52 49.1735 102.151 63.2744 99Z" fill="#FFC107"></path><g opacity="0.8"><path d="M128.86 119.402C130.17 119.402 131.376 119.739 132.477 120.413C133.578 121.087 134.451 122.002 135.097 123.158C135.742 124.313 136.065 125.594 136.065 127C136.065 128.406 135.742 129.687 135.097 130.842C134.451 131.998 133.578 132.913 132.477 133.587C131.376 134.261 130.17 134.598 128.86 134.598C127.683 134.598 126.639 134.347 125.727 133.847C124.816 133.346 124.066 132.653 123.478 131.767V134.222H121V114H123.478V122.233C124.066 121.347 124.816 120.654 125.727 120.153C126.639 119.653 127.683 119.402 128.86 119.402ZM128.547 132.171C129.477 132.171 130.322 131.95 131.081 131.507C131.86 131.044 132.467 130.419 132.904 129.629C133.359 128.839 133.587 127.963 133.587 127C133.587 126.037 133.359 125.161 132.904 124.371C132.467 123.581 131.86 122.965 131.081 122.522C130.322 122.06 129.477 121.829 128.547 121.829C127.597 121.829 126.734 122.06 125.955 122.522C125.196 122.965 124.588 123.581 124.133 124.371C123.696 125.161 123.478 126.037 123.478 127C123.478 127.963 123.696 128.839 124.133 129.629C124.588 130.419 125.196 131.044 125.955 131.507C126.734 131.95 127.597 132.171 128.547 132.171Z" fill="white"></path><path d="M150 119.778L143.023 140H140.374L142.425 134.078L136.758 119.778H139.378L143.649 130.582L147.352 119.778H150Z" fill="white"></path></g><g opacity="0.8"><path d="M184 116H179.322V125.753C179.322 127.554 179.301 130.529 176.047 130.529C172.792 130.529 172.662 127.387 172.678 125.718V116H168V125.718C168 131.841 170.199 135 175.859 135C177.601 135 178.626 134.406 179.321 133.875V134.66H183.999V116H184Z" fill="white"></path><path d="M165.929 109.145C160.702 108.582 159.514 109.757 158.564 110.978C157.723 112.059 157.613 113.563 157.613 114.643V115.955H155V120.278H157.661V134H162.413V120.278H166V115.955H162.508V114.737C162.508 113.497 163.521 113.343 164.028 113.375L165.074 113.421L165.929 109.145Z" fill="white"></path><path d="M189.598 110L185 110.912V134.625H189.598V133.874C190.944 134.705 192.516 135 194.195 135C196.316 135 198.267 134.238 199.806 132.963C198.795 131.819 198.017 130.457 197.548 128.955C196.722 130.075 195.485 130.786 194.103 130.786C191.615 130.786 189.597 128.481 189.597 125.637C189.597 122.792 191.614 120.487 194.103 120.487C196.592 120.487 198.609 122.792 198.609 125.637V125.641C198.61 128.021 199.497 130.192 200.942 131.843L200.943 131.842C201.023 131.934 201.104 132.024 201.187 132.112C202.178 133.161 203.403 133.976 204.77 134.469V134.472C205.724 134.814 206.75 135 207.819 135C212.889 135 217 130.808 217 125.637C217 120.465 212.889 116.274 207.819 116.274C205.666 116.274 203.686 117.029 202.12 118.295C203.109 119.443 203.865 120.81 204.312 122.318C205.147 121.254 206.381 120.58 207.759 120.58C210.273 120.58 212.31 122.823 212.31 125.59C212.31 128.356 210.272 130.599 207.759 130.599C205.245 130.599 203.23 128.382 203.207 125.637C203.207 123.256 202.352 121.083 200.944 119.431C199.293 117.494 196.881 116.273 194.196 116.273C192.516 116.273 190.944 116.75 189.598 117.581V110H189.598Z" fill="white"></path></g>
      </svg>

      <Button intent={"primary"}>
      Regarder la télé
        <LiveIcon className={"w-10 h-fit"} />
      </Button>


      <div className="flex flex-col justify-items-start gap-4">
        <Link className={`text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus ${isClicked ? 'text-yellow-500' : ''}`} to="/movie">Accueil </Link>
        <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus" to="/team/sales">Chaînes</Link>
        <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus" to="/type/films">Films</Link>
        <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus" to="/type/series">Series</Link>
      </div>

    </nav>

  );

}

