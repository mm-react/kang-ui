import React from 'react';
import {
  SuccessIcon,
  CloseIcon,
  UserIcon,
  WarningIcon,
  LoadingIcon,
  EmptyIcon,
  PasswordShowIcon,
  PasswordHideIcon,
  InfoIcon,
  FileUploadIcon,
  UpIcon,
  DownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CalendarIcon,
  CloseCircleIcon,
  ErrorIcon,
} from 'kang-ui';
import './index.less';
export default () => (
  <div className="Icon-wrapper">
    <div className="Icon-list">
      <div className="Icon-item">
        <SuccessIcon />
        <span>SuccessIcon</span>
      </div>
      <div className="Icon-item">
        <CloseIcon />
        <span>CloseIcon</span>
      </div>
      <div className="Icon-item">
        <UserIcon />
        <span>UserIcon</span>
      </div>
      <div className="Icon-item">
        <WarningIcon />
        <span>WarningIcon</span>
      </div>
      <div className="Icon-item">
        <LoadingIcon />
        <span>LoadingIcon</span>
      </div>
      <div className="Icon-item">
        <EmptyIcon />
        <span>EmptyIcon</span>
      </div>
      <div className="Icon-item">
        <PasswordShowIcon />
        <span>PasswordShowIcon</span>
      </div>
      <div className="Icon-item">
        <PasswordHideIcon />
        <span>PasswordHideIcon</span>
      </div>
      <div className="Icon-item">
        <FileUploadIcon />
        <span>FileUploadIcon</span>
      </div>
      <div className="Icon-item">
        <UpIcon />
        <span>UpIcon</span>
      </div>
      <div className="Icon-item">
        <DownIcon />
        <span>DownIcon</span>
      </div>
      <div className="Icon-item">
        <ArrowRightIcon />
        <span>ArrowRightIcon</span>
      </div>
      <div className="Icon-item">
        <ArrowLeftIcon />
        <span>ArrowLeftIcon</span>
      </div>
      <div className="Icon-item">
        <CalendarIcon />
        <span>CalendarIcon</span>
      </div>
      <div className="Icon-item">
        <CloseCircleIcon />
        <span>CloseCircleIcon</span>
      </div>
      <div className="Icon-item">
        <ErrorIcon />
        <span>ErrorIcon</span>
      </div>
    </div>
  </div>
);
