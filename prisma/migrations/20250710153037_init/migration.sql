-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER', 'CUSTOMER', 'OWNER');

-- CreateEnum
CREATE TYPE "Title" AS ENUM ('MR', 'MS', 'MRS', 'MISS', 'MASTER');

-- CreateEnum
CREATE TYPE "KidTitle" AS ENUM ('MISS', 'MASTER');

-- CreateEnum
CREATE TYPE "KidType" AS ENUM ('MEMBERSHIP', 'LIFETIME', 'SP', 'TRIAL', 'PRIVATE', 'BD', 'MEMBERSHIPEXPIRED');

-- CreateEnum
CREATE TYPE "Nationality" AS ENUM ('Thai', 'Japanese', 'Korean', 'Indian', 'Chinese', 'OtherAsian', 'Australian', 'Israel', 'Europe', 'Africa', 'SouthAmerica', 'NorthAmerica');

-- CreateEnum
CREATE TYPE "SocialMedia" AS ENUM ('YES', 'NO');

-- CreateEnum
CREATE TYPE "OpenForm" AS ENUM ('OPEN', 'OPENKID', 'CLOSE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Cancel', 'Confirm');

-- CreateEnum
CREATE TYPE "ClassName" AS ENUM ('Bugs', 'Birds', 'Beasts', 'SuperBeasts', 'FunnyBugs', 'GiggleWorms', 'GoodFriends', 'FlipsHotshots');

-- CreateEnum
CREATE TYPE "Days" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateEnum
CREATE TYPE "PaidBy" AS ENUM ('Credit', 'Cash', 'Cheque');

-- CreateEnum
CREATE TYPE "CategoryPrice" AS ENUM ('Membership', 'Lessons', 'Etc');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'CREDIT_CARD', 'QR_CODE', 'BANK_TRANSFER', 'E_WALLET');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED', 'PROCESSING', 'EXPIRED');

-- CreateTable
CREATE TABLE "authenticator" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "credentialID" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "authenticator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "title" "Title",
    "firstName" TEXT,
    "lastName" TEXT,
    "address" TEXT,
    "mobile" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "openForm" "OpenForm" NOT NULL DEFAULT 'CLOSE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kid" (
    "id" TEXT NOT NULL,
    "studentId" TEXT,
    "nickName" TEXT,
    "identity" TEXT,
    "title" "KidTitle" NOT NULL DEFAULT 'MISS',
    "firstName" TEXT,
    "lastName" TEXT,
    "birthDay" TIMESTAMP(3),
    "comment" TEXT,
    "nationality" "Nationality",
    "socialMedia" "SocialMedia" NOT NULL DEFAULT 'YES',
    "kidType" "KidType" NOT NULL DEFAULT 'SP',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_kid" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "kidId" TEXT,

    CONSTRAINT "user_kid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "imageString" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "classesName" "ClassName" NOT NULL DEFAULT 'Bugs',
    "ages" TEXT,
    "monday" TEXT,
    "tuesday" TEXT,
    "wednesday" TEXT,
    "thursday" TEXT,
    "friday" TEXT,
    "saturday" TEXT,
    "sunday" TEXT,
    "days" "Days" NOT NULL DEFAULT 'Monday',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booking" (
    "id" TEXT NOT NULL,
    "kidId" TEXT,
    "bookingBillId" TEXT,
    "use" BOOLEAN,
    "comment" TEXT,
    "dateBooking" TIMESTAMP(3) NOT NULL,
    "timeBooking" TEXT,
    "classBooking" TEXT,
    "status" "Status" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booking_bill" (
    "id" TEXT NOT NULL,
    "kidId" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "remainingLessons" INTEGER DEFAULT 0,
    "expiryDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "booking_bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price" (
    "id" TEXT NOT NULL,
    "list" TEXT,
    "noLessons" INTEGER,
    "checkbox" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION,
    "durationMonths" INTEGER,
    "unlimited" BOOLEAN,
    "categoryPrice" "CategoryPrice" NOT NULL DEFAULT 'Etc',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill_price" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "plusAndMinus" INTEGER,
    "discountPct" DOUBLE PRECISION DEFAULT 0.0,
    "discountAmt" DOUBLE PRECISION DEFAULT 0.0,
    "startDate" TIMESTAMP(3),
    "expiryDate" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bill_price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill" (
    "id" TEXT NOT NULL,
    "kidId" TEXT,
    "paidBy" "PaidBy" NOT NULL DEFAULT 'Cash',
    "reportId" TEXT,
    "classBill" TEXT,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "totalPaid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "totalIncome" DOUBLE PRECISION NOT NULL,
    "totalExpense" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_bill" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "billId" TEXT NOT NULL,

    CONSTRAINT "report_bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "method" "PaidBy" NOT NULL DEFAULT 'Cash',
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "transactionId" TEXT,
    "paymentGateway" TEXT,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cardLast4" TEXT,
    "cardBrand" TEXT,
    "authorizationId" TEXT,
    "qrCode" TEXT,
    "referenceNumber" TEXT,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "accounts_userId_idx" ON "accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "sessions"("sessionToken");

-- CreateIndex
CREATE INDEX "sessions_userId_idx" ON "sessions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_created_at_idx" ON "users"("created_at");

-- CreateIndex
CREATE INDEX "users_name_firstName_lastName_idx" ON "users"("name", "firstName", "lastName");

-- CreateIndex
CREATE INDEX "booking_kidId_idx" ON "booking"("kidId");

-- CreateIndex
CREATE INDEX "booking_bookingBillId_idx" ON "booking"("bookingBillId");

-- CreateIndex
CREATE INDEX "booking_bill_kidId_idx" ON "booking_bill"("kidId");

-- CreateIndex
CREATE UNIQUE INDEX "booking_bill_billId_priceId_key" ON "booking_bill"("billId", "priceId");

-- CreateIndex
CREATE UNIQUE INDEX "bill_price_billId_priceId_key" ON "bill_price"("billId", "priceId");

-- CreateIndex
CREATE UNIQUE INDEX "report_bill_reportId_billId_key" ON "report_bill"("reportId", "billId");

-- CreateIndex
CREATE INDEX "payment_billId_idx" ON "payment"("billId");

-- AddForeignKey
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_kid" ADD CONSTRAINT "user_kid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_kid" ADD CONSTRAINT "user_kid_kidId_fkey" FOREIGN KEY ("kidId") REFERENCES "kid"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_kidId_fkey" FOREIGN KEY ("kidId") REFERENCES "kid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_bookingBillId_fkey" FOREIGN KEY ("bookingBillId") REFERENCES "booking_bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_bill" ADD CONSTRAINT "booking_bill_kidId_fkey" FOREIGN KEY ("kidId") REFERENCES "kid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_bill" ADD CONSTRAINT "booking_bill_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_bill" ADD CONSTRAINT "booking_bill_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bill_price" ADD CONSTRAINT "bill_price_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bill_price" ADD CONSTRAINT "bill_price_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "price"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bill" ADD CONSTRAINT "bill_kidId_fkey" FOREIGN KEY ("kidId") REFERENCES "kid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_bill" ADD CONSTRAINT "report_bill_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_bill" ADD CONSTRAINT "report_bill_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
