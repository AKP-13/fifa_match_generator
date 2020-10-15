from rest_framework import routers
from .api import ResultViewSet

router = routers.DefaultRouter()
router.register('api/results', ResultViewSet, 'results')

urlpatterns = router.urls