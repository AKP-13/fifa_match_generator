from rest_framework import serializers
from results.models import Result

# Result Serializer
class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = '__all__'