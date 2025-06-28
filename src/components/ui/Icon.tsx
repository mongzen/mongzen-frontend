import * as HeroiconsOutline from '@heroicons/react/24/outline';
import * as HeroiconsSolid from '@heroicons/react/24/solid';

export type IconName = keyof typeof HeroiconsOutline;

interface IconProps {
  name: IconName;
  variant?: 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

export function Icon({
  name,
  variant = 'outline',
  size = 'md',
  className = '',
}: IconProps) {
  const iconSet = variant === 'solid' ? HeroiconsSolid : HeroiconsOutline;
  const IconComponent = iconSet[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in ${variant} variant`);
    return null;
  }

  return (
    <IconComponent
      className={`${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    />
  );
}

// Export commonly used icons for convenience
export const {
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
  Bars3Icon,
  PlayIcon,
  PauseIcon,
  StarIcon,
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  ClockIcon,
  CalendarIcon,
  DocumentIcon,
  FolderIcon,
  PhotoIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CloudIcon,
  ServerIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  FireIcon,
  BoltIcon,
  ShieldCheckIcon,
  CheckIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  FaceSmileIcon,
  BuildingOfficeIcon,
  UsersIcon,
  AcademicCapIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  ArrowTrendingUpIcon,
  MegaphoneIcon,
  SunIcon,
  MoonIcon,
  BeakerIcon,
  CommandLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  NewspaperIcon,
  TagIcon,
  GiftIcon,
  TicketIcon,
  TruckIcon,
  MapIcon,
  LinkIcon,
  ClipboardIcon,
  PrinterIcon,
  QrCodeIcon,
  LanguageIcon,
  FlagIcon,
  CameraIcon,
  FilmIcon,
  SpeakerXMarkIcon,
  PowerIcon,
  WifiIcon,
  SignalIcon,
  LockClosedIcon,
  LockOpenIcon,
  KeyIcon,
  FingerPrintIcon,
  NoSymbolIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  FolderOpenIcon,
  ArchiveBoxIcon,
  InboxIcon,
  PaperClipIcon,
  AtSymbolIcon,
  HashtagIcon,
} = HeroiconsOutline;
