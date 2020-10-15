from results.models import Result
from rest_framework import viewsets, permissions
from .serializers import ResultSerializer

# Result Viewset
class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ResultSerializer