<template>
  <div class="flex min-h-full flex-col px-4">
    <UnquietLoader />
    <LayoutPageHeader />
    <LayoutPageContent>
      <slot />
    </LayoutPageContent>
    <LayoutPageFooter />
  </div>
</template>
