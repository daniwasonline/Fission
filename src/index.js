/*
    Copyright (C) 2021 MineRIP, Daniel Hyders, Bunni <https://mine.rip>
    This file is part of Fission, the frontend component of Nexus.

    Fission is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Fission is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License

    Name: Core:index.js
    Original Author: Create React App Community
    Contributors: CRA Community, Daniel Hyders <git@danny.works>
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './jsx/css/Root.css';
import Core from './jsx/Core';

ReactDOM.render(
  <React.StrictMode>
    <Core />
  </React.StrictMode>,
  document.getElementById('root')
);