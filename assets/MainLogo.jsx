import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function MainLogo(props) {
  return (
      <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={407}
          height={87}
          viewBox="0 0 4070 870"
          {...props}
      >
        <G fill="#681437">
          <Path d="M1590 845c0-3 110-125 244-273l243-267-43-93-43-93 66 3 65 3 17 42c9 23 19 44 23 48 3 4 23-16 44-44l38-51h63c35 0 63 3 63 6 0 4-28 38-62 78-34 39-68 78-75 87-11 14-7 29 27 104 22 48 40 91 40 96 0 6-27 9-62 7l-62-3-21-53-21-52-203 230-203 230h-69c-38 0-69-2-69-5zM1202 163c-15-3-22-10-20-21 2-13 16-18 61-20 56-3 58-2 55 20-2 19-10 23-38 24-19 1-45 0-58-3z" />
        </G>
        <G fill="#8f566c">
          <Path d="M1590 844c0-5 24-32 53-59l52-50-50 55c-27 30-51 57-52 59-2 2-3 0-3-5zM1750 815c19-19 36-35 39-35s-10 16-29 35-36 35-39 35 10-16 29-35zM1820 735c19-19 36-35 39-35s-10 16-29 35-36 35-39 35 10-16 29-35zM1740 678c41-45 50-53 50-45 0 2-21 23-47 47l-48 45 45-47zM1900 645c19-19 36-35 39-35s-10 16-29 35-36 35-39 35 10-16 29-35zM1840 568c41-45 50-53 50-45 0 2-21 23-47 47l-48 45 45-47zM1975 560c21-22 41-40 44-40s-13 18-34 40-41 40-44 40 13-18 34-40zM1935 460c27-27 51-50 54-50s-17 23-44 50c-27 28-51 50-54 50s17-22 44-50zM2050 475c19-19 36-35 39-35s-10 16-29 35-36 35-39 35 10-16 29-35zM2177 493c-3-5 22-6 55-5 59 4 60 3 53-20-5-18-4-20 4-8 22 32 13 40-48 40-33 0-62-3-64-7zM2144 416c-6-26-7-27-28-9l-21 18 19-22c11-13 21-23 23-23 6 0 24 53 19 58-3 2-8-8-12-22zM2030 358c41-45 50-53 50-45 0 2-21 23-47 47l-48 45 45-47zM2242 375c-17-37-14-45 4-12 9 16 14 31 11 33-2 2-9-7-15-21zM2057 265c-24-50-20-58 4-12 11 22 19 41 17 43-3 2-12-12-21-31zM2250 257c0-2 15-16 33-33l32-29-29 33c-28 30-36 37-36 29zM2154 218c-4-6-3-8 3-5 6 4 25-10 43-31l32-37-29 42c-30 45-37 50-49 31zM2340 157l25-29-67 4c-36 1-64 0-61-4 6-11 133-10 133 0 0 5-12 19-27 33l-28 24 25-28zM1253 163c23-3 37-9 37-19s-13-14-50-14c-47 0-66 12-37 23 7 3 4 6-6 6-12 1-17-5-15-16 2-14 15-19 61-21 56-3 58-2 55 20-2 19-9 23-43 24l-40 1 38-4zM2120 142c0-8-24-13-67-14l-68-2 64-3c59-4 94 7 78 24-4 3-7 1-7-5z" />
        </G>
        <G fill="#95d508">
          <Path d="M763 649c-37-11-37-10-22-62 10-37 11-38 47-30 76 15 114 8 144-26 15-17 28-40 28-50 0-18-1-18-40 1-100 50-191-29-177-153 14-118 101-204 221-216 50-5 162 11 170 25 7 13-63 362-82 404-23 52-69 93-120 108-45 12-125 12-169-1zM435 496c-42-18-83-69-91-112-10-52 12-136 47-184 36-49 115-90 174-90 56 0 124 37 147 80 39 75 18 183-51 251-64 65-154 87-226 55zM1303 497c-44-17-45-19-28-61 15-34 19-37 43-30 15 4 45 8 67 8 34 1 40-2 43-22 3-16-5-26-29-40-61-32-89-67-89-110 0-47 11-57 67-66 24-3 69-18 100-32 34-14 67-23 80-19 21 5 21 7 9 43l-13 37h-59c-80 0-85 23-15 66 85 53 101 128 39 189-47 47-143 63-215 37zM1640 497c-50-25-56-54-36-164 11-54 21-104 23-110 3-9-4-13-21-13-26 0-27-2-20-37 9-50 11-53 38-53 19 0 25-7 30-39 5-36 9-39 50-50 82-20 84-17 60 72-5 14 1 17 36 17h41l-7 38c-9 51-10 52-53 52h-37l-17 87c-18 92-13 113 24 113 15 0 19 7 19 34 0 19-7 42-16 50-19 19-79 21-114 3zM2941 497c-62-32-84-108-57-202 32-108 140-185 260-185 41 0 113 14 122 23 3 3-6 64-20 136s-26 154-26 181v50h-55c-53 0-55-1-55-27v-26l-22 21c-44 40-103 52-147 29zM3614 500c-46-14-90-69-98-121-12-90 35-191 110-235 122-72 256-17 241 98-3 21-11 46-19 55-21 26-88 51-155 59-64 7-69 10-55 31 19 31 73 34 162 12 11-3 16 7 18 39 3 38 1 43-25 53-40 15-143 20-179 9zM5 488c2-7 23-114 46-238S97 19 103 13c14-18 96-17 103 1 4 12-41 274-63 364-5 22-4 22 97 22 92 0 101 2 96 18-2 9-7 32-11 50l-7 32H160C37 500 2 497 5 488zM1144 340l30-161 55 7c31 3 57 7 58 8 2 2-41 237-52 284-5 20-11 22-63 22h-58l30-160zM1790 488c0-13 54-300 65-345 5-21 11-23 65-23 58 0 60 1 55 23-3 12-18 86-34 165-32 165-48 192-113 192-24 0-38-5-38-12zM2420 493c0-4-7-73-15-153s-15-162-15-183v-38l57 3 57 3v246l26-58c14-32 39-88 55-126l29-67h47c57 0 58 3 60 150 0 70 3 98 9 85 5-11 28-68 51-128l42-107h59c32 0 58 2 58 4s-41 88-91 190l-92 186h-52c-51 0-53-1-59-31-3-17-6-55-6-83 0-106-9-105-59 6l-47 103-57 3c-31 2-57-1-57-5zM3255 478c16-69 46-241 51-296l7-62h107l-7 33-6 32 35-33c21-20 49-35 73-39l38-6-7 48c-11 69-15 75-48 75-41 0-84 47-96 108-6 26-15 73-22 105l-11 57h-60c-56 0-59-1-54-22z" />
        </G>
        <G fill="#ac8292">
          <Path d="M1620 805c19-19 36-35 39-35s-10 16-29 35-36 35-39 35 10-16 29-35zM1700 717c0-2 15-16 33-33l32-29-29 33c-28 30-36 37-36 29zM1800 607c0-2 15-16 33-33l32-29-29 33c-28 30-36 37-36 29zM1920 475c19-19 36-35 39-35s-10 16-29 35-36 35-39 35 10-16 29-35zM1990 397c0-2 15-16 33-33l32-29-29 33c-28 30-36 37-36 29z" />
        </G>
        <Path
            d="M1189 127c4-5 32-7 62-5l54 3-62 5c-34 3-58 1-54-3z"
            fill="#c6aab5"
        />
        <G fill="#fffffe">
          <Path d="M476 398c-42-60 14-198 79-198 54 0 71 78 36 157-29 64-85 84-115 41zM3009 399c-25-25-24-58 2-114 24-52 65-85 104-85 26 0 27 2 21 38-26 144-78 210-127 161zM876 391c-33-37-4-140 48-175 28-18 71-21 81-6 3 5-1 40-10 77-24 103-78 150-119 104zM2627 300c-3-11-1-23 4-26s9 6 9 20c0 31-6 34-13 6zM2503 270c0-25 2-35 4-22 2 12 2 32 0 45-2 12-4 2-4-23zM3640 263c0-6 9-22 21-37 15-19 30-26 55-26 40 0 55 23 31 47-17 18-107 31-107 16z" />
        </G>
      </Svg>
  )
}

export default MainLogo